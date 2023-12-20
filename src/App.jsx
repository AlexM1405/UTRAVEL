import React from 'react'
import './App.css'
import Navbar from './Componets/NavBar'
import { Routes, Route, } from "react-router-dom";
import Home from './Componets/Pages/Home'
import Services from './Componets/Pages/Services';
import Customers from './Componets/Pages/Customers';
import  Products from './Componets/Pages/Products'
import  SIGNUP from './Componets/Pages/SIGNUP';
import Login from './Componets/Pages/Login';
import TourDetails from './Componets/TourDetails';
import UserPage from './Componets/Pages/UserPage'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/tours/:id" element={<TourDetails />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Costumers" element={<Customers />} />
        <Route path='/SIGNUP' element={<SIGNUP/>} />
        <Route path="/Login" element={<Login/> }/>
        <Route path="/UserPage" element={<UserPage/> }/>
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}







export default App
