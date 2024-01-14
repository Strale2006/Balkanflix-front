import Navbardb from "./components/navbar/navbardb";
import Menudb from "./components/menu/Menudb";
import {Outlet} from "react-router-dom";
import Footerdb from "./components/footer/footerdb";
import "./Styles/global.scss"

const Layout = () => {
    return (
        <div className="main">
            <Navbardb/>
            <div className="container">
                <div className="menuContainer">
                    <Menudb/>
                </div>
                <div className="contentContainer">
                    <Outlet/>
                </div>
            </div>
            <Footerdb/>
        </div>
    )
}

export default Layout