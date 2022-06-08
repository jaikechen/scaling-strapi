/*
 *
 * HomePage
 *
 */

import React, { memo } from 'react';
import pluginId from '../../pluginId';
import {Button} from "primereact/button";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import {useDispatch, useSelector} from "react-redux";
import {increment} from "../../store/list";

const HomePage = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>{pluginId}&apos;s HomePage</h1>
      <p>Happy coding what is it 1234 </p>
      <span>{count}</span>
        <Button icon="pi pi-check" iconPos="right" label={'this ss'} onClick={()=>dispatch(increment())} ></Button>
      <h2>fffdffsd</h2>

    </div>
  );
};

export default memo(HomePage);
