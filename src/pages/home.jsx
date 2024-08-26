import React, { Fragment } from 'react'
import Header from '../components/Header/Header'
import HeroSection from '../components/Hero-section/HeroSection'
import Company from '../components/Company-section/Company'
import Offer from '../components/Offer/Offer'
import Courses from '../components/Courses-section/Courses'
import AboutUs from '../components/About-us/AboutUs'
import Update from '../components/GetUpdate/Update'
import Footer from '../components/Footer/Footer'




const home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <Company />
      <Offer />
      <Courses />
      <AboutUs />
      <Update />
      <Footer />
    </Fragment>
  )
}

export default home