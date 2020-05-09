import React from 'react';
import './App.css';
import Header from './Header';
import Form from './Form';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import About from './About'
import Home from './Home'


function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Header}></Route>
        <Route exact path="/home" component={Home}></Route>
        <Route path="/form" component={Form}></Route>
        <Route path="/about" component={About}></Route>
      </div>
    </Router>
  );
}

export default App;
