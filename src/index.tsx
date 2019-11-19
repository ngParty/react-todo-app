import React from 'react';
import ReactDOM from 'react-dom';

import './styles/normalize.css';
import './index.css';

import { App } from './start/app';
// import { App } from './finish/app';
import * as serviceWorker from './service-worker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
