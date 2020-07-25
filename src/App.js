import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Gallery from './components/Gallery';
import Login from './components/Login';

function App(props) {
  return (
    <Router>
      <React.Fragment>
        <Route path ="/" exact component = {Gallery}/>
        <Route path="/login" component={Login}/>
      </React.Fragment>
    </Router>
  );
}

export default App;

