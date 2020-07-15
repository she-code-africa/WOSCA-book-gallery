import { combineReducers } from 'redux';

import counterReducer from './Counter/counter.reducer';

const rootReducer = combineReducers({
    //This is an example reducer, it should change
    counter: counterReducer,
});

export default rootReducer;