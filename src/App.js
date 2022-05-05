import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import './App.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';

import Activities from './pages/Activities';
import Alimentacao from './pages/Alimentacao';
import Home from './pages/Home';

export default function App() {
    return (
      <div className="App">
        <Header/>
        <Router>
          <Routes>
            <Route index element={<Home/>} />
            <Route path='/Exercicios' element={<Activities/>} />
            <Route path='/Alimentacao' element={<Alimentacao/>} />
          </Routes>
        </Router>
        <Footer />
      </div>
    );
}