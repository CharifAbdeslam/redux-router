import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import post from './post';
const rootReducers = combineReducers({
  posts:post,
  form:formReducer
});
export default rootReducers;
