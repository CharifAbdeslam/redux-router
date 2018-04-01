import React, { Component } from 'react';
import PostIndex from './PostIndex';
class App extends Component {
  render() {
    return (
      <div className="container text-center">
     <h1>Hello redux</h1>
     <PostIndex/>
      </div>
    );
  }
}
export default App;
