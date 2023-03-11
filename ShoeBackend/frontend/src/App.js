import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';
// import Contact from './components/Contect';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Home from './components/Home';
import Contact from './components/Contect';
import MoreProduct from './components/MoreProduct';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProduct } from './slice/ProductSlice';
import ViewCart from './components/ViewCart';
import ProtectedRoute from './components/ProtectedRoute';
import Brand from './components/Brand';
import CheckOut from './components/CheckOut';

function App() {
  const dispatch = useDispatch()
useEffect(()=>{
  dispatch(fetchProduct())
},[]);
  return (
    <div className="App">
     <Header/>
     <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="brand" element={<Brand/>}/>
         <Route path="products" element={<Product/>}/>
         <Route path="signin" element={<Signin/>}/>
         <Route path="signup" element={<Signup/>}/>
         <Route path="contact" element={<Contact/>}/>
         <Route path="/moreproduct" element={<MoreProduct/>}/>
          <Route path="viewcart" element={<ProtectedRoute><ViewCart/></ProtectedRoute>}/>
         <Route path="checkout" element={<ProtectedRoute><CheckOut/></ProtectedRoute>}></Route>
       </Routes>
       {/* <MoreProduct/> */}
     <Footer/>
    </div>
  );
}

export default App;
