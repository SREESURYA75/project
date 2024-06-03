import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  // In your login component after successful login
const handleLogin = () => {
  // Perform login logic here

  // Redirect to the intended path after login
  const redirectPath = localStorage.getItem('redirectPath') || '/';
  const wishlistItem = JSON.parse(localStorage.getItem('wishlistItem'));

  // Perform the intended action (e.g., adding to wishlist)
  if (wishlistItem) {
      addToCart(wishlistItem); // Assuming addToCart adds to wishlist
      localStorage.removeItem('wishlistItem'); // Clear the wishlist item
  }

  localStorage.removeItem('redirectPath'); // Clear the redirect path
  navigate(redirectPath);
};


  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (email === "" || password === "") {
      alert("Please enter both email and password.");
      return;
    }
    if (email === "admin@gmail.com" && password === "user") {
      alert("Login successful!");
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userEmail', email);
      navigate('/cart');
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  const toggleSignup = () => {
    alert('Signup functionality not implemented for demo.');
  };

  const { email, password } = formData;

  return (
    <div className="padtop200px">
      <div className="formstyle">
        <h1>Login</h1>
        <Form onSubmit={handleSubmit}>
          <FloatingLabel controlId="email" label="Email">
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleChange}
              required
            />
          </FloatingLabel>
          <br />
          <FloatingLabel controlId="password" label="Password">
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={handleChange}
              required
            />
          </FloatingLabel>
          <br />
          <div className="btnsubmit">
            <Button type="submit">Submit</Button>
          </div>
        </Form>
        <br />
        <p>OR</p>
        <br />
        <p>Don't have an account? <Button variant="link" onClick={toggleSignup}>Signup</Button></p>
      </div>
    </div>
  );
};

export default Login;
