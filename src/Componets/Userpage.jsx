import React from 'react'
import ProvidersManager from "./Providers.jsx"
import Pos from "./Pos.jsx"
import Footer from "./Footer.jsx"
import Common_Userpage from "./Common_Userpage.jsx"
import "./Userpage.css"


function Userpage() {
  return (
    <>
        <Common_Userpage/>
        <div className='Container-userpage'>
        <h2>Welcome to your personalized journey hub!</h2>
        <p>we're here to turn your travel dreams into reality. Navigate through exclusive itineraries, handpicked recommendations, and seamless planning tools—all designed to make your adventure extraordinary. Let's embark on a unique travel experience tailored just for you!</p>
        <h1>Our Providers</h1>
        <ProvidersManager/>
        <h1>Our POS</h1>
        <Pos/>
        </div>
        <Footer/>
    </>

    
  )
}

export default Userpage