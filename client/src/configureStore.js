import {combineReducers, createStore} from "redux";
import {reduce} from "./news/reducer";

const reducerMap = {
    news: reduce
}

const reducer = combineReducers(reducerMap);

export default (initState) => {
    return createStore(reducer, initState)
};