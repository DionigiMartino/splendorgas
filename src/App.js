import './App.css';

// importing the Router

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// import Header

import Header from './components/Header/Header';

// import Home Component

import Home from './components/Main/Home/Home'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/contact">
            <Home />
          </Route>

          <Route path="/about">
            <Home />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>

        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
