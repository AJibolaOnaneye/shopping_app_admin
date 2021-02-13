import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import PrivateRoute from './components/HOC/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn, getAllCategory, getInitialData } from './actions';
// import { getInitialData } from './actions/initialData.action';
import Products from './containers/Products';
import Orders from './containers/Orders';
// import Category from './containers/Category';
import NewPage from './containers/NewPage';
import logo from './logo.svg';
import Category from './containers/Category';


function App() {
  
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)


  // componentDidMount or componentDidUpdate
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());

    }
    if(auth.authenticate){
      dispatch(getInitialData());
    }
    

  }, [auth.authenticate]);

  return (
    <div className="App">
      <Router>
      <React.Fragment>
      <Switch>
        <PrivateRoute path="/" exact component={Home} />
        <PrivateRoute path="/page" component={NewPage} />
        <PrivateRoute path="/category" component={Category} />
        <PrivateRoute path="/products" component={Products} />
        <PrivateRoute path="/orders"  component={Orders} />
  
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Switch>
      </React.Fragment>
      </Router>
    </div>
  );

}

export default App;
