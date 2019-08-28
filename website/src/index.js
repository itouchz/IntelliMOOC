import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ProjectOverview from './ProjectOverview'
import 'antd/dist/antd.css'
import './index.css';
import * as serviceWorker from './serviceWorker';

const location = window.location

if (location.pathname === '/' || location.pathname === '/home' || location.pathname === '/index') {
    ReactDOM.render(<App />, document.getElementById('root'));
} else if (location.pathname === '/overview') {
    ReactDOM.render(<ProjectOverview />, document.getElementById('root'));
} else if (location.pathname === '/team') {
    // ReactDOM.render(<ProjectOverview />, document.getElementById('root'));
} else if (location.pathname === '/paper') {
    // ReactDOM.render(<ProjectOverview />, document.getElementById('root'));
} else {
    // 404 Page
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
