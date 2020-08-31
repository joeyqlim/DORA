// external imports
import React from 'react';
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

// local imports
import App from './App';
import rootReducer from './reducers/index'

// assets
import 'semantic-ui-css/semantic.min.css';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
