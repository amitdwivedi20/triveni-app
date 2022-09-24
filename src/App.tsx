import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Header from './components/header/Header';
import Products from './pages/products/Products';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      
      <Routes>
      <Route path="*" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/products" element={<Products/>} />
      
      </Routes>
      
    </div>
  );
}

export default App;
