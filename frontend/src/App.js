import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage';
import ListPage from './pages/ListPage';
import MentorsPage from './pages/MentorsPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomePage} exact />
          <Route path='/list/:id' component={ListPage} exact />
          <Route path='/mentors' component={MentorsPage} exact />
          <Route path='/login' component={LoginPage} exact />
          <Route path='/signup' component={SignupPage} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
