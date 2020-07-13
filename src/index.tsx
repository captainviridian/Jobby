import React from 'react';
import ReactDOM from 'react-dom';

import 'fontsource-roboto';

import store from 'store';
import Root from 'containers/Root';

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);