import React from 'react';
import Navbar from './components/Navbar';
import HomeBody from './components/HomeBody';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <br />
        <br />
        <br />
        <HomeBody />
        <Routes>
          <Route path='/' exact='/'></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
