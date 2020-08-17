import {createStore, combineReducers, applyMiddleware} from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import userReducer from "./reducers/user-reducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
    userReducer,
    form: reduxFormReducer, // mounted under "form"
});
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
