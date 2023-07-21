import React, { useState } from 'react';
import './shoppingpage.css';

const electronicItems = [
  { id: 1, name: 'Smartphone', price: 500 },
  { id: 2, name: 'Laptop', price: 1000 },
  { id: 3, name: 'Tablet', price: 300 },
];

const ShoppingPage = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="container">
      <h1>Electronic Store</h1>
      <div>
        <h2>Available Items</h2>
        <ul>
          {electronicItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
                <button id='cart_button' onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="shopping-cart">
        <h2>Shopping Cart</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
        {cartItems.length > 0 && (
          <p className="total-price">Total: ${getTotalPrice()}</p>
        )}
      </div>
    </div>
  );
};

export default ShoppingPage;
