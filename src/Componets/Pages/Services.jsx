import React from "react";
import  "../../App.css"
import Footer from "../Footer";
import ProvidersManager from "../Providers"
import ImageSlider from "../ImageSlider"
import Common_Services from "../Common_Services";
import AerolineasSlider from "../AerolinesSlider";
import IntroServices from "../Intro-Services";


  function Services() {
    return (
      
        <>
    
        <Common_Services/>
        <IntroServices/>
        <ImageSlider/>
        <AerolineasSlider/>
        <Footer/>
        
        </>
 );
}

export default Services
