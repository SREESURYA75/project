import React from 'react';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isSigningUp: false, 
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    
  };

  
  toggleSignup = () => {
    this.setState((prevState) => ({
      isSigningUp: !prevState.isSigningUp,
    }));
  };

  render() {
    const { isSigningUp } = this.state;

    return (
      <div className="padtop200px">
        <div className='formstyle'>
          <h1>{isSigningUp ? 'Signup' : 'Login'}</h1>
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
            <div className='btnsubmit'>
              <Button type="submit">{isSigningUp ? 'Signup' : 'Submit'}</Button>
            </div>
          </Form>
          <br />
          <p>OR</p>
          <br />
          
          <p>{isSigningUp ? 'Already have an account?' : "Don't have an account?"} <Button variant="link" onClick={this.toggleSignup}>{isSigningUp ? 'Login' : 'Signup'}</Button></p>
        </div>
      </div>
    );
  }
}

export default Login;
