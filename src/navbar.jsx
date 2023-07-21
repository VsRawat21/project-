import React, { useRef } from "react";
import SearchIcon from '@mui/icons-material/Search';
// import InputLabel from '@mui/material/InputLabel';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import DehazeOutlinedIcon from '@mui/icons-material/DehazeOutlined';
// import Address from "./address"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Dropdown from "./sreachdropdown";
import { useState } from "react";
import HoverdropLang from "./language_hover_dropdown";
import HoverdropAcc from "./account_hover_dropdown";
import { Link } from "react-router-dom";


const Navbar = () => {

    // const address_component = useRef("");
    const dropdown = useRef("");
    const select = useRef("");
    const auto_select = useRef("");
    const hoverdown = useRef("")

    // const show_address_icon = () => {
    //     address_component.current.style.visibility = "visible"
    // }
    // const hide_address_icon = () => {
    //     address_component.current.style.visibility = "hidden"
    // }


    const show_dropdown = () => {

        let visibility = dropdown.current.style.visibility
        if (visibility === "hidden") {
            return dropdown.current.style.visibility = "visible"

        }
        if (visibility === "visible") {
            return dropdown.current.style.visibility = "hidden"
        }
    }

    const [val, setVal] = useState("All");

    const select_dropdpown = () => {
        setVal(select.current.innerHTML);
        console.log(auto_select.current.focus())

    }

    const show_hoverdown = () => {
        hoverdown.current.style.visibility = "visible"
    }

    const hide_hoverdown = () => {
        hoverdown.current.style.visibility = "hidden"
    }

    /*const hoverdown_hover_lang = () => {
        console.log("hello")
    }*/

    return (
        <>
            <nav className="top_nav">
                <li className="top_nav_li top_nav_li_1">
                    <Link to="/random"><img src="/images/logo.png" alt="img"/></Link>
                </li>
                <li className="top_nav_li top_nav_li_2" /*onClick={show_address_icon}*/ >
                    <div className="address">
                        <span><FmdGoodOutlinedIcon /></span>
                        <div>
                            <div className="div_top">Hello</div>
                            <div className="div_bottom"><b>Select your address</b></div>
                        </div>
                    </div>
                    {/* <div className="address_component" ref={address_component} >
                        <div className="hide_address_icon"  onClick={hide_address_icon} />
                        <Address className="card address_icon" style={{ zIndex: "2" }} />
                    </div> */}
                </li>
                <li className="top_nav_li top_nav_li_3">
                    <div className="input-group" id="navbar_input-group">
                        <span className="input-group-text" onClick={show_dropdown}>{val}<ArrowDropDownIcon /></span>
                        <input type="text" placeholder="Search Amazon.in" ref={auto_select} />
                        <span className="input-group-text" ><SearchIcon /></span>
                    </div>


                </li>
                <li className="top_nav_li top_nav_li_4" onMouseOver={show_hoverdown} onMouseLeave={hide_hoverdown}>
                    <div>
                        <img src="/images/ind_logo.png" alt="img"/>
                        <b>EN</b>
                        <ArrowDropDownIcon />
                    </div>
                    <HoverdropLang  hover={hoverdown} />
                </li>
                <li className="top_nav_li top_nav_li_5">
                    <div className="div_top">Hello, sign in</div>
                    <div className="div_bottom">
                        <b>Account & Lists</b>
                        <ArrowDropDownIcon />
                    </div>
                    <HoverdropAcc  />
                </li>
                <li className="top_nav_li top_nav_li_6">
                    <div className="div_top">Returns</div>
                    <div className="div_bottom"><b>& orders</b></div>
                    
                </li>
                <li className="top_nav_li top_nav_li_7">
                    <AddShoppingCartOutlinedIcon className="cart_icon" />
                    <b>Cart</b>

                </li>
            </nav>
            <Dropdown style={{ visibility: "hidden", zIndex: "5" }} drop={dropdown} click={select_dropdpown} sel={select} />
          

            <nav className="navbar">
                <div className="navbar_left">
                    <span>
                        <span><DehazeOutlinedIcon /></span>
                        <b>All</b>
                    </span>
                    <span><Link to="/random">Amazon miniTV</Link></span>
                    <span><Link to="/random">Sell</Link></span>
                    <span><Link to="/random">Best Seller</Link></span>
                    <span><Link to="/random">Mobiles</Link></span>
                    <span><Link to="/random">Today's Deals</Link></span>
                    <span><Link to="/random">Customer Services</Link></span>
                    <span><Link to="/random">Electronics</Link></span>
                    <span><Link to="/random">Primes</Link></span>
                    <span><Link to="/random">New Releases</Link></span>
                </div>
                <div className="navbar_right">
                    <span><Link to="/random">New Launches from Mobiles, Electronics & more| Shop now</Link></span>
                </div>
            </nav>


        </>
    )
}
export default Navbar;