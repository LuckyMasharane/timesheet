import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Login from '../screens/login';
import Signup from '../screens/signup';
import Home from '../screens/home';




class App extends Component{

  render(){
    return (
      <BrowserRouter>
<div>
          <Route path="/" exact component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/signup" component={Signup} />
        </div>
      </BrowserRouter>
    )
  }

}


export default App;
