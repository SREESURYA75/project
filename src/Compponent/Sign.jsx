import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formData;

    if (email === "" || password === "" || confirmPassword === "") {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Store user information in local storage
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);
    alert("Signup successful!");

    // Redirect to login page after signup
    navigate('/login');
  };

  const { email, password, confirmPassword } = formData;

  return (
    <div className="padtop200px">
      <div className="formstyle">
        <h1>Signup</h1>
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
          <FloatingLabel controlId="confirmPassword" label="Confirm Password">
            <Form.Control
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={confirmPassword}
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
        <p>Already have an account? <Button variant="link" onClick={() => navigate('/login')}>Login</Button></p>
      </div>
    </div>
  );
};

export default Signup;
