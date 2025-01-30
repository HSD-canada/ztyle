import Navbar from "../Components/Navbar";
import Navtab from "../Components/Navtab";
import StylistBar from "../Components/StylistBar";
import Closet from "../Components/Home/Closet"
import './styling/home.css'
import { useState } from "react";

export default function Home(props){
    const fetch = props.fetch;
    const [showNav,setShowNav] = useState(true);
    return <>
        <Navbar/>
        <div className="home-navtab">
            <Navtab show={showNav} pageIndex= {props.pageIndex} highlight ={0}/>
        </div>
        <div className="home-section">
            <div className="wrapper1">
                <p>Your Closet</p>
                <Closet fetch={fetch}/>
            </div>
        </div>
        <div className="home-stylistbar">
        <StylistBar fetch={fetch}/>
        </div>
    </>
}