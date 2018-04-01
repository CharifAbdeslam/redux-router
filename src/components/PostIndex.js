import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchPost} from '../actions/actions';

class PostIndex extends Component{
  componentDidMount(){
    this.props.fetchPost();
  }
  render(){
    return(
    <Link to="/newpost" className="btn btn-primary">Make new post</Link>
    );
  }
}

export default connect(null,{fetchPost})(PostIndex);
