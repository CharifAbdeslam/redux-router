
import { FETCH_POST , SHOW_POST } from '../actions/actions';
const INITIAL_STATE = {all:[] , post:null};

export default function (state = INITIAL_STATE ,action){
  switch (action.type) {
    case FETCH_POST:
      return{...state,all:action.payload.data}
    case SHOW_POST:
        return{...state,all:action.payload.data}
    default:
  return state;
  }
}
