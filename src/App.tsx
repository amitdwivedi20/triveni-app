import React, { Suspense, useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Fab } from '@mui/material';
import GoToTop from './components/go-to-top/GoToTopComponent';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { checkAuthLoader } from './util/Auth';
const Home = React.lazy(() => import('./pages/home/Home'));
const Products = React.lazy(() => import('./pages/products/Products'));
const ContactUs = React.lazy(() => import('./pages/contact-us/ContactUs'));
const Awards = React.lazy(() => import('./pages/awards/Awards'));
const AboutUs = React.lazy(() => import('./pages/about-us/AboutUs'));
const ProductDetails = React.lazy(() => import('./pages/product-detail/ProductDetails'));
const Login = React.lazy(() => import('./pages/login/Login'));
const AdminPanel = React.lazy(() => import('./pages/admin-panel/AdminPanel'));
const CreateProduct = React.lazy(() => import('./pages/admin-panel/create-product/CreateProduct'));
const EditProduct = React.lazy(() => import('./pages/admin-panel/edit-product/EditProduct'));
const AdminHome = React.lazy(() => import('./pages/admin-home/AdminHome'));
const HomePagePanel = React.lazy(() => import('./pages/home-page-panel/HomePagePanel'));

const App = (props: any) => {

  //useEffect
  return (
    <React.Fragment>
      <div className="App" >
        <Header />
        <Suspense fallback={<p>Loading....</p>}>
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/awardsandrecognitions" element={<Awards />} />
            <Route path="/products/:productId" element={<ProductDetails />} />
            <Route path="/admin/products" element={<AdminPanel />} loader={checkAuthLoader}/>
            <Route path="/admin/products/create" element={<CreateProduct />} loader={checkAuthLoader} />
            <Route path="/admin/products/edit/:id" element={<EditProduct />} loader={checkAuthLoader} />
            <Route path="/admin" element={<AdminHome />} loader={checkAuthLoader} />
            <Route path="/admin/homepagepanel" element={<HomePagePanel />} loader={checkAuthLoader} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
      <GoToTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </GoToTop>
    </React.Fragment>
  );
}

export default App;
