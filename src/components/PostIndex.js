import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchPost} from '../actions/actions';
import { ListGroup, ListGroupItem } from 'reactstrap';
class PostIndex extends Component{
  componentDidMount(){
    this.props.fetchPost();
  }
  render(){
    return(<div>
    <Link to="/newpost" className="btn btn-primary">Make new post</Link>
    {
           this.props.posts.map(cat=>{
             return(<ListGroup>
               <Link to={"posts/" + cat.id}>
                 <ListGroupItem>{cat.id}{cat.categories}</ListGroupItem>
               </Link>

             </ListGroup>
               )
           })
    }
    </div>);
  }
}
function mapStateToProps(state){
  return{
    posts:state.posts.all
  }
}
export default connect(mapStateToProps,{fetchPost})(PostIndex);
