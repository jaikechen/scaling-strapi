/**
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {NotFound} from '@strapi/helper-plugin';
import pluginId from '../../pluginId';
import HomePage from '../HomePage';
import {Provider} from 'react-redux'
import {store} from '../../store/store'
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Switch>
          <Route path={`/plugins/${pluginId}`} component={HomePage} exact/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Provider>
  );
};

export default App;
