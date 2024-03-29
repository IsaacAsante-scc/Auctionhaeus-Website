import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';
import Contact from './components/pages/Contact/Contact';
import Faq from './components/pages/FAQ/Faq';
import Footer from './components/pages/Footer/Footer';
import Home from './components/pages/HomePage/Home';


/* Created By Isaac Asante 2021 - Auction Haeus and Liquidation Centre*/


function App() {
  return (
    
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/FAQ' component={Faq}/>
        <Route path='/Contact' component={Contact}/>
        <Route component={Home} />
        <Redirect from="*" to="/" />
      </Switch>
      <Footer/>
    </Router>
  );
}



export default App;

