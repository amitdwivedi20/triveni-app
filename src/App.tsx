import React, { Suspense } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Header from './components/header/Header';
//import Products from './pages/products/Products';
import Home from './pages/home/Home';

//lazy loading 
const Products = React.lazy(() => import('./pages/products/Products'))

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback = {<p>Loading....</p>}>
      <Routes>
        
          <Route path="*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
       
      </Routes>
      </Suspense>
    </div>
  );
}

export default App;
