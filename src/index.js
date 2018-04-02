import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import rootReducers from './reducers';
import promise from 'redux-promise';
import App from './components/App';
import {showResult} from './actions/actions';
import NewPost from './components/NewPost';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
const createStoreWithMiddleware = applyMiddleware(
promise
)(createStore)
const st=()=>{
  console.log("hello")
}
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducers)}>
      <Router>
        <Switch>
          <Route   exact path="/" component={App}/>
          <Route   exact path="/newpost" component={(props)=><NewPost onSubmit={showResult}/>}/>
        </Switch>
      </Router>
    </Provider>,
    document.getElementById('root')
);
