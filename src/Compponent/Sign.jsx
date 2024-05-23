

import React from 'react';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      errors: {},
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      const response = await axios.post('http://localhost:8000/signup', { email, password });
      alert('Signup successful');
      this.props.history.push('/login');
    } catch (error) {
      console.log(error);
      alert('An error occurred');
    }
  };

  render() {
    return (
      <div className="padtop200px">
        <div className='formstyle'>
          <h1>Signup</h1>
          <Form onSubmit={this.handleSubmit}>
            <FloatingLabel controlId="email" label="Email">
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
            </FloatingLabel>
            <br />
            <FloatingLabel controlId="password" label="Password">
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter your password"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
            </FloatingLabel>
            <br />
            <FloatingLabel controlId="confirmPassword" label="Confirm Password">
              <Form.Control
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={this.state.confirmPassword}
                onChange={this.handleChange}
                required
              />
            </FloatingLabel>
            <br />
            <div className='btnsubmit'>
              <Button type="submit">Signup</Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default Signup;
