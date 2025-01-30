import React from 'react'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import Main from '../Main/Main'
import Flowers from '../Flowers/Flowers'
import './HomePage.css'
import MainFooter from '../MainFooter/MainFooter'
import Footer from '../Footer/Footer'

const HomePage = () => {
  return (
    <>
    <Header />
    <Hero />
    <Flowers />
    <Main />
    <MainFooter />
    <Footer />
    </>
  )
}

export default HomePage