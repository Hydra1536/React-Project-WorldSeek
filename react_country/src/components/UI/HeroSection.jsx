import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const closeMobileMenu = () => {
  // This function can be used to close the mobile menu if needed
};
export const HeroSection = () => {
return(    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
            <h1 className="heading-xl">
Explore the World, One Country at a Time.
</h1>
<p className="paragraph">
Discover the history, culture, and beauty of every nation. search, and filter through countries to find the details
</p>
<NavLink to="/Country" onClick={closeMobileMenu}>
<button className="btn btn-darken btn-inline bg-white-box">
  Start Exploring <FaLongArrowAltRight />
</button>
</NavLink>


        </div>
        <div className="hero-image">
            <img src="/images/9668a425ea1cb158258b82f097dbdf50.jpg" 
            alt="hero-image" className="banner-image"/>
        </div>
      </div>
    </main>

)

}