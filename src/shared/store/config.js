import { createStore, combineReducers } from 'redux';
import reducers from '../../containers/reducers';
import sagas from '../../containers/sagas';
import { noopReducers } from "./utils";

const rootReducer = combineReducers({
  ...reducers,
  sagas: noopReducers(sagas)
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export const put = store.dispatch;
