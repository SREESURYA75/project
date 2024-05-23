import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="bg-primary text-white text-center text-lg-start">
      <Container className="p-4">
        <Row>
          <Col lg={6} md={12} className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Cycle</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
              molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
              voluptatem veniam, est atque cumque eum delectus sint!
            </p>
          </Col>
          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase">MENU</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <Link to="/" className="text-white">Home</Link>
              </li>
              <li>
                <Link to="/About" className="text-white">About</Link>
              </li>
              <li>
                <Link to="/Service" className="text-white">Service</Link>
              </li>
              <li>
                <Link to="/Contact" className="text-white">Contact</Link>
              </li>
            </ul>
          </Col>
          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Newsletter</h5>
            <form action="">
              <div className="form-outline mb-4">
                <input type="email" id="form5Example22" className="form-control" />
                <label className="form-label" htmlFor="form5Example22">Email address</label>
              </div>
              <button type="button" className="btn btn-primary mb-4">
                Subscribe
              </button>
            </form>
          </Col>
        </Row>
      </Container>
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
      </div>
    </footer>
  );
}

export default Footer;
