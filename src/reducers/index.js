import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import posts from './post';
const rootReducers = combineReducers({
  posts:posts,
  form:formReducer
});
export default rootReducers;
