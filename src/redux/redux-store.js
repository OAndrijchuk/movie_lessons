// import { combineReducers, createStore } from "redux";
import {combineReducers, legacy_createStore as createStore} from "redux"; 
import coursesReducer from "./courses-reducer";
import lessonsReducer from "./lessons-reducer";


let reducers = combineReducers({
    coursesReducer: coursesReducer,
    lessonsReducer: lessonsReducer,
});

const store = createStore(reducers);

window.store = store;

export default store;