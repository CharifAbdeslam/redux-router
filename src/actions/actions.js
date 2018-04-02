export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
const ROOT_URL ='http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=123';


export function fetchPost (){
  const req = fetch(`${ROOT_URL}/posts${API_KEY}`)
                   .then(res => res.json())
  return{
    type:FETCH_POST,
    payload:req
  }
}
export function showResult(props){
  const req = fetch(`${ROOT_URL}/posts${API_KEY}`, {
                    method: "POST",
                    body:props
                  });
  return{
    type:CREATE_POST,
    payload:req
  }
}
