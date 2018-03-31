import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import reducers from './reducers';
import App from './components/App';
import PostIndex from './components/PostIndex';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';


const createStoreWithMiddleware = applyMiddleware()(createStore)
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router>
        <Switch>
          <Route   exact path="/" component={App}/>
          <Route  exact path="/post" component={PostIndex}/>
        </Switch>
      </Router>
    </Provider>,
    document.getElementById('root')
);
