import React from "react";
import  "../../App.css"
import "../Button"
import Footer from "../Footer"
import ImageCollage  from "../ImageCollage";
import Common_Costumers from "../Common_Costumers";
import IntroCostumers from "../Intro-Costumers";




  function Costumers() {
  
    return (
        <>
       <Common_Costumers/>
        <IntroCostumers/>
        <ImageCollage />
         <Footer/>
        </>
    


  
 );
}

export default Costumers