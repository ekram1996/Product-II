import './App.css';
import Main from './views/Main';
import React from 'react';
import Detail from './views/Detail';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
       <Router>
          <Main path="product/"/>
          <Detail path="/:id" />
        </Router>
    </div>
  );
}

export default App;
