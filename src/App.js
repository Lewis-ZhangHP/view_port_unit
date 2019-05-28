import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Test1 from './components/test1';
import Test2 from './components/test2';
import Test3 from './components/test3';
import Test4 from './components/test4';
import Test5 from './components/test5';

function App() {
  return (
    <Fragment className="App">
      <Router>
          <Route path="/test1" component={Test1} />
          <Route path="/test2" component={Test2} />
          <Route path="/test3" component={Test3} />
          <Route path="/test4" component={Test4} />
          <Route path="/test5" component={Test5} />
      </Router>
    </Fragment>
  );
}

export default App;
