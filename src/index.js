import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css';
import {store} from "./store";
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from "react-router-redux";
import {Router, Route, hashHistory} from 'react-router'

// const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
