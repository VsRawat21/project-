import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
const Card = (props) => {
    return (
        <>
            <div className="column col-md-4 col-lg-3 col-xxl-3 col-10">
                <div className="card mx-10 my-4" id="card" style={{ width: "18rem" }}>
                    <h5 className="card-title">{props.Heading}</h5>
                    <img src={props.img} className="card-img-top" alt="..." />
                    <Link to="/shoppingpage"  className="card_link">Link</Link>
                </div>
            </div> 
        </>
    )
}

const CardMain = () => {
    return (<>
        <div className="cards_main">
            <div className="container">
                <div className="row">
                    <Card Heading="Smart phones" img="/images/smartphone.jpg" link="/random" />
                    <Card Heading="Tablets" img="/images/tabs.jpg" link="/random" />
                    <Card Heading="Laptops" img="/images/laptops.jpg" link="/random" />
                    <Card Heading="Watches" img="/images/watches.jpg" link="/random" />
                    <Card Heading="Home Appliances" img="/images/homeapp.jpg" link="/random" />
                    <Card Heading="Furniture" img="/images/furniture.jpg" link="/random" />
                    <Card Heading="Groceries" img="/images/grocery.jpg" link="/random" />
                    <Card Heading="Heavy discounts" img="/images/discount.jpg" link="/random" />

                </div>
            </div>
        </div>
    </>)

}

export default CardMain;