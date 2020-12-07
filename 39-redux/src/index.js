import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './Redux/rootReducer'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// 1st argument === reducer
// 2nd argument === options => async middleware
const store = createStore(rootReducer, applyMiddleware(thunk))

// connect
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
