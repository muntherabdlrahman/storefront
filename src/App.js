import React from 'react'
import Categories from './components/Categories';
import Footer from './components/Footer';
import Header from './components/Header';
import Products from './components/Products';
import ActiveCategories from './components/activeCategories';



function App() {
  return (
    <>
      <Header/>
      <Categories/>
      <ActiveCategories />
      <Products/>
      <Footer/>
    </>
  )
}

export default App

