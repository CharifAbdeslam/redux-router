import React, {Component} from 'react';
import {connect} from 'react-redux';
import {showPost} from '../actions/actions';
import {Link} from 'react-router-dom';
class PostShow extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.showPost(id)
  }
  render() {
    console.log(this.props.posts)
    if(!this.props.posts){
      return(<div>Loading.....</div>)
    }
    return (<div>
      <Link to="/">Back to menu</Link>
        <h3>{this.props.posts.title}</h3>
        <h3>{this.props.posts.categories}</h3>
    </div>)
  }
}
function mapStateToProps(state) {
  return {posts: state.posts.all}
}
export default connect(mapStateToProps, {showPost})(PostShow)
