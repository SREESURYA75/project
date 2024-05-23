import React, { useState } from "react";
import Product_d from "./product_d";
import Cart from "./Cart";

const MainComponent = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);
        if (existingItemIndex !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingItemIndex].quantity += 1;
            setCartItems(updatedCartItems);
        } else {
            const newItem = { ...item, quantity: 1 };
            setCartItems([...cartItems, newItem]);
        }
    };

    return (
        <div>
            <Product_d addToCart={addToCart} />
            <Cart cartItems={cartItems} />
        </div>
    );
}

export default MainComponent;