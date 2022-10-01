import React, { Suspense } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';


//lazy loading 
const Products = React.lazy(() => import('./pages/products/Products'));
const ContactUs = React.lazy(() => import('./pages/contact-us/ContactUs'));
const Awards = React.lazy(() => import('./pages/awards/Awards'));
const AboutUs = React.lazy(() => import('./pages/about-us/AboutUs'));

const App = () => {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<p>Loading....</p>}>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/awardsandrecognitions" element={<Awards />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
