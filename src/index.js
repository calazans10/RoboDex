import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import App from './Containers/App';
import { searchReducer, robotReducer } from './reducers';
import 'tachyons';
import './index.css';

const logger = createLogger();
const rootReducer = combineReducers({
  search: searchReducer,
  robots: robotReducer,
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
