import './App.css';

// importing the Router

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// import Header

import Header from './components/Header/Header';

// import Footer

import Footer from './components/Footer/Footer';

// import Home Component

import Home from './components/Main/Home/Home'

// import About Component

import About from './components/Main/About/About'

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
            <About />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
