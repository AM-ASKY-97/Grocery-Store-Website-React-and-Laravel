import React from 'react'
import Header from '../Header/Header'
import Home from '../Home/Home'
import Banner from '../Banner/Banner'
import Feature from '../Feature/Feature'
import Products from '../Products/Products'
import Categories from '../Categories/Categories'
import Review from '../Review/Review'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

const MainPage = () => {
  return (
    <div>
        <Home />
        <Banner />
        <Feature />
        <Products />
        <Categories />
        <Review />
        <Contact />
    </div>
  )
}

export default MainPage