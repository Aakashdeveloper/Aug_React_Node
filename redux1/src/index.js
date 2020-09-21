import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import Home from './container/Home';

ReactDOM.render(
    <Provider store={store}>
        <Home/>
    </Provider>,document.getElementById('root')
)