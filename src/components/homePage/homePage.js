import React, { useState, useEffect } from 'react';
import Navbar from './navbar'
import Carosel from './carosel';
import Features from './feature';
import FeaturesItems from './featuresItems';
import Offerings from './offerings';
import Footer from './footer';
import Clients from './clients';
import FooterTwo from './footer2';
import Zoom from 'react-reveal/Zoom';
import { ScrollToTop } from './scrollTop';
export default function HomePage() {
  console.log('snjnkd')

  
  
  return (
    <div>
      <Navbar/>
      <Carosel/>
      <Zoom>
      <Features/>
      </Zoom>
      <FeaturesItems/>
      <Offerings/>
      <Zoom>
      <Clients/>
      <Footer/>
      <FooterTwo/>
      <ScrollToTop />
      </Zoom>
    </div>
  )
}