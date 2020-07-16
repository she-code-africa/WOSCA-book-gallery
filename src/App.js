import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Gallery from './components/Gallery';

function App(props) {
  return (
    <Router>
      <React.Fragment>
        <Route path ="/" exact component = {Gallery}/>
      </React.Fragment>
    </Router>
  );
}

export default App;

