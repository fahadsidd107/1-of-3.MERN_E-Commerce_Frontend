import React from 'react'
import Category from '../components/Category'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Products from '../components/Products'
import Slider from '../components/Slider'


function Home() {
  return (
    <div>
    <Navbar/>
    <Slider/>
    <Category/>
    <Products/>
    <NewsLetter/>
    <Footer/>
    </div>
  )
}

export default Home