import './App.css';

// importing the Router

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// import Header

import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
