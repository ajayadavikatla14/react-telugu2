import React from "react";
import ReactDOM  from "react-dom";
import App from "./App";
import store from './Store';
import {Provider} from 'react-redux';

ReactDOM.render(
    <React.Fragment>
        <Provider store={store}>
            <App />
        </Provider>   
    </React.Fragment>,
    document.getElementById('root')
)