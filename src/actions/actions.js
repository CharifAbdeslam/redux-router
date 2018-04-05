import axios from 'axios';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const SHOW_POST = 'SHOW_POST';
const ROOT_URL ='http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=123';


export function fetchPost (){
  const req = axios.get(`${ROOT_URL}/posts${API_KEY}`)
  return{
    type:FETCH_POST,
    payload:req
  }
}
export function showResult(props){
  const req = fetch(`${ROOT_URL}/posts${API_KEY}`, {
                    method: "POST",
                    body:props
                  })
  return{
    type:CREATE_POST,
    payload:req
  }
}
export function showPost(id){
  const req = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)
  return{
     type:SHOW_POST,
     payload:req
  }
}
