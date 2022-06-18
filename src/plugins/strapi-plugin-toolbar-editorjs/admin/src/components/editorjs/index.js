import React, { useState, useCallback ,useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import requiredTools from './requiredTools';
import customTools from '../../config/customTools';
import MediaLibAdapter from '../medialib/adapter'
import MediaLibComponent from '../medialib/component';
import {changeFunc, getToggleFunc} from '../medialib/utils';
import EditorJS from 'toolbar-editor-js';

const EDITTOR_HOLDER_ID = 'editorjs';
const Editor = ({ onChange, name, value }) => {
  const ejInstance = useRef();
  const [editorData, setEditorData] = React.useState(JSON.parse(value || '{}'));

  useEffect(() => {
    if (!ejInstance.current) {
      initEditor();
    }
    return () => {
      ejInstance.current.destroy();
      ejInstance.current = null;
    }
  }, []);
  const initEditor = () => {
    const editor = new EditorJS({
      holder: EDITTOR_HOLDER_ID,
      logLevel: "ERROR",
      data: editorData,
      onReady: () => {
        ejInstance.current = editor;
        document.querySelector('[data-tool="image"]').remove()
      },
      onChange: async () => {
        let content = await ejInstance.current.saver.save();
        setEditorData(content);
        if (content.blocks.length) {
          onChange({target: {name, value: JSON.stringify(content)}});
        }
      },
      autofocus: true,
      tools: {
        ...requiredTools, ...customTools, ...customImageTool
      },
    });
  };

  const [mediaLibBlockIndex, setMediaLibBlockIndex] = useState(-1);
  const [isMediaLibOpen, setIsMediaLibOpen] = useState(false);

  const mediaLibToggleFunc = useCallback(getToggleFunc({
    openStateSetter: setIsMediaLibOpen,
    indexStateSetter: setMediaLibBlockIndex
  }), []);

  const handleMediaLibChange = useCallback((data) => {
    changeFunc({
        indexStateSetter: setMediaLibBlockIndex,
        data,
        index: mediaLibBlockIndex,
        editor: ejInstance.current
    });
    mediaLibToggleFunc();
  }, [mediaLibBlockIndex, ejInstance]);

  const customImageTool = {
    mediaLib: {
      class: MediaLibAdapter,
      config: {
        mediaLibToggleFunc
      }
    }
  }

  return (
    <>
      <div id={EDITTOR_HOLDER_ID} style={{ border: `1px solid rgb(227, 233, 243)`, borderRadius: `2px`, marginTop: `4px` }}> </div>
      <MediaLibComponent
        isOpen={isMediaLibOpen}
        onChange={handleMediaLibChange}
        onToggle={mediaLibToggleFunc}
      />
    </>
  );
};

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default Editor;
