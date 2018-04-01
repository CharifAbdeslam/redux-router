
import { FETCH_POST } from '../actions/actions';
const INITIAL_STATE = {all:[],posts:null};

export default function (state = INITIAL_STATE ,action){
  if(action.type === FETCH_POST){
   return{...state,all:action.payload.data}
  }
  return state;
}
