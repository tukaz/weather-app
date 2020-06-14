import { createStore } from 'redux';
import { cityReducer } from './../reducers/city'

const initialState = {};

export const store = createStore(
    cityReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);