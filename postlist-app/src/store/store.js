import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
import { rootWatcher } from '../pages/Posts/sagas/rootWatcher';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, thunk];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootWatcher);
