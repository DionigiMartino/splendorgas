import './App.css';

// importing the Router

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import DocumentTitle from 'react-document-title'

// import Header

import Header from './components/Header/Header';

// import Footer

import Footer from './components/Footer/Footer';

// import Home Component

import Home from './components/Main/Home/Home'

// import About Component

import About from './components/Main/About/About'

// import GPL component

import GPL from './components/Main/About/GPL'

// import Job

import Job from './components/Main/Contact/Job'

// import Contact Component

import Contact from './components/Main/Contact/Contact'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>

          <Route path="/lavora-con-noi">
              <DocumentTitle title="Splendorgas S.r.l - Lavora con noi">
                <Job />
              </DocumentTitle>
          </Route>

          <Route path="/contatti">
            <DocumentTitle title="Splendorgas S.r.l - Contatti">
              <Contact />
            </DocumentTitle>
          </Route>

          <Route path="/gpl">
            <DocumentTitle title="Splendorgas S.r.l - GPL">
              <GPL />
            </DocumentTitle>
          </Route>

          <Route path="/chisiamo">
            <DocumentTitle title="Splendorgas S.r.l - Chi Siamo">
              <About />
            </DocumentTitle>
          </Route>

          <Route path="/">
            <DocumentTitle title="Splendorgas S.r.l">
              <Home />
            </DocumentTitle>
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
