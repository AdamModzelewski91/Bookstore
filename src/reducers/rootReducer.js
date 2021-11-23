import { combineReducers } from 'redux';
import appReducer from './appReducer';

const rootReducer = combineReducers ({
  books: appReducer,  
})

export default rootReducer