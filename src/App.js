import React, { Component } from 'react';
import './App.css';
import {Routes} from  './routes.js'
import {BrowserRouter, Route} from 'react-router-dom'
class App extends Component {
  render() {
    const routeComponents = Routes.map((element, index) => <Route exact path={element.path} component={element.component} key={index} />);
    console.log(routeComponents);
    return (
      <BrowserRouter>
        {routeComponents}
      </BrowserRouter>)
  }
}

export default App;
