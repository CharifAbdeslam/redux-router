import React , {Component} from 'react';
import { connect } from 'react-redux';
import {showPost} from '../actions/actions';
 class PostShow extends Component{

componentDidMount(){
  const id = this.props.match.params.id;
  this.props.showPost(id)
}
  render(){
    const id = this.props.match.params.id;
    return(<div>The post is: {id}</div>)
  }
}
export default connect (null,{showPost})(PostShow)
