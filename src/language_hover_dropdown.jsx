import React from "react";


const Hoverdrop =(props)=>{

    return(
        <>
            <div className="container_hoverdrop_lang" style={{ visibility: "hidden"}} ref={props.hover}>
            <ul>
                <li className="language_choose"><input type="radio"></input><span>English</span></li>
                <div className="hoverdrop_underlines"></div>
                <li className="language_choose"><input type="radio"></input><span>Hindi</span></li>
                <li className="language_choose"><input type="radio"></input><span>Tamil</span></li>
                <li className="language_choose"><input type="radio"></input><span>Tamil</span></li>
                <li className="language_choose"><input type="radio"></input><span>Telgu</span></li>
                <li className="language_choose"><input type="radio"></input><span>Kannada </span></li>
                <li className="language_choose"><input type="radio"></input><span>Malyalam</span></li>
                <li className="language_choose"><input type="radio"></input><span>Bengali </span></li>
                <li className="language_choose"><input type="radio"></input><span>Marathi </span></li>
                <li><a href="/random" style={{textDecoration:"none"}}>Learn more</a></li>
                <div className="hoverdrop_underlines"></div>
                <li>You are shopping on Amazon.in</li>
                <li><a href="/random" style={{textDecoration:"none"}}>Change country/region.</a></li>
               
                </ul>
            </div>
        </>
    )
}

export default Hoverdrop; 