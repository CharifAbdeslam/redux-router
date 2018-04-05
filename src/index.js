import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import rootReducers from './reducers';
import promise from 'redux-promise';
import App from './components/App';
import PostShow from './components/PostShow';
import {showResult} from './actions/actions';
import NewPost from './components/NewPost';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
const createStoreWithMiddleware = applyMiddleware(
promise
)(createStore)
ReactDOM.render(

    <Provider store={createStoreWithMiddleware(rootReducers)}>
      <Router>
        <Switch>
          <Route   exact path="/" component={App}/>
          <Route   exact path="/newpost" component={(props)=><NewPost onSubmit={showResult}/>}/>
          <Route exact path="/posts/:id" component={PostShow}/>
        </Switch>
      </Router>
    </Provider>,
    document.getElementById('root')
);
