import React from "react";
import '../../App.css';
import HeroSection from "../heroes/HeroSection";
import Cards from "../cards/Cards";


function Home(){
    return(
        <>
            <HeroSection/>
            <Cards/>
        </>
    )
}

export default Home;
