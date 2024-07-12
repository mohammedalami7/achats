import Header from "../header/header";
import Footer from "../footer/footer";
import Slidbare from "../slidebare/slidbare";
import { Outlet } from "react-router-dom";

export default function BaseLayout(){
    return(
        <div className="base-layout">
            <Header/>
            <Slidbare />
            <div>
            <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}