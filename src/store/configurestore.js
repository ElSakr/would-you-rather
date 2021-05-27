import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
import logger from "../middleware/logger";

export default function configureStore() {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;
  return createStore(reducer, composeEnhancers(applyMiddleware(thunk, logger)));
}
