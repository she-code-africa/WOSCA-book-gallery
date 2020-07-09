import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Gallery from './Components/Gallery';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Route path ="/" exact component ={Gallery} />
      </React.Fragment>
    </Router>
  );
}

export default App;
