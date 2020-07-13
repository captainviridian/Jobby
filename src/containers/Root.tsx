import React from 'react';
import { Provider } from 'react-redux';

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Jobs, NotFound } from 'pages';
import { Store } from 'redux';

interface Props {
  store: Store
}

const Root = ({ store }: Props) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/jobs' />
        </Route>
        <Route path='/jobs' component={Jobs} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);

export default Root;