import React, { useState } from 'react';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import Section1 from './Section1';
import Product from './CartFolder/product_d';
import Cart from './CartFolder/Movecart';
import Homepage from './Compponent/Homepage';
import About from './Compponent/About';
import Service from './Compponent/Service2'
import Login from './Compponent/Login';
import Contact from './Compponent/Contact';
import Service2 from './Compponent/Service2';


const initialCartItems = [];

const handleDecrement = (cartItems, setCartItems, index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].quantity > 0) {
        updatedCartItems[index].quantity -= 1;
        setCartItems(updatedCartItems);
    }
};

const handleIncrement = (cartItems, setCartItems, index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity += 1;
    setCartItems(updatedCartItems);
};

function App() { 
    const [cartItems, setCartItems] = useState(initialCartItems);

    const addToCart = (item) => {
        const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            setCartItems(prevItems => prevItems.map(cartItem => {
                if (cartItem.id === item.id) {
                    return { ...cartItem, quantity: cartItem.quantity + 1 };
                }
                return cartItem;
            }));
        } else {
            setCartItems(prevItems => [...prevItems, { ...item, quantity: 1 }]);
        }
    };

    return (
        <div className="App">
            <Router>
                <Section1 cartItemCount={cartItems.length} />
                <Routes>
                    <Route path='/' element={<Homepage/>} />
                    <Route path='/About' element={<About/>} />
                    <Route path='/Services' element={<Service2/>} />
                    <Route path="/product" element={<Product addToCart={addToCart} />} />
                    <Route path="/cart" element={<Cart cartItems={cartItems} handleDecrement={(index) => handleDecrement(cartItems, setCartItems, index)} handleIncrement={(index) => handleIncrement(cartItems, setCartItems, index)} />} />
                    <Route path='/Login' element={<Login/>} />
                    <Route path='/Contact' element={<Contact/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
