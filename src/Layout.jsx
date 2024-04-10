import React from 'react'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {Outlet } from 'react-router-dom';
//Outlet is basically used for render any component inside it in line number 10 header and footer is present on all the pages in between header and footer we can render any elements thatwhy we use outlet header and footer are fixed and between header and footer content it will we change according to your need

const Layout = () => {
  return (
    <>
      <Header/>
      <Outlet />
      <Footer/>
    </>
  )
}

export default Layout
