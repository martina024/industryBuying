import { legacy_createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { reducer as AppReducer } from "./AppReducer/reducer";
import { reducer as AuthReducer } from "./AuthReducer/reducer";



const rootReducer = combineReducers({AppReducer, AuthReducer});

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export {store};