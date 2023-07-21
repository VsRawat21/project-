import React from "react";


const Hoverdrop = (Props) => (
    <>
        <div className="container_hoverdrop_acc" style={{ visibility: "hidden" }} ref={Props.hover}>
            <div id="container_hoverdrop_acc_section_top">
                <button className="btn">sign in</button>
                <p>New customer?<span> start here</span></p>
            </div>
            <div id="container_hoverdrop_acc_section_bottom">
                <span className="container container_hoverdrop_acc_section_bottom">
                    <h5>Your lists</h5>
                    <p>Create a wish list</p>
                    <p>Wish from any website</p>
                    <p>Baby wishlist</p>
                    <p>Discover your style</p>
                    <p>Explore showroom</p>
                </span>
                <span className="container container_hoverdrop_acc_section_bottom">
                    <h5>Your account</h5>
                    <p>Your account</p>
                    <p>Your order</p>
                    <p>Your wishlist</p>
                    <p>Your Recommandations</p>
                    <p>Your Prime membership</p>
                    <p>Your Prime video</p>
                    <p>Your WSubscribe and save items</p>
                    <p>Membership and subscriptions</p>
                    <p>Your seller account</p>
                    <p>Manage your content and <br /> devices</p>
                    <p>Your free Amazon business <br />account</p>
                </span>
            </div>
        </div>
    </>
)

export default Hoverdrop