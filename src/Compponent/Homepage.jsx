import React from 'react';
import './Home.css'; 
import { Container } from 'react-bootstrap';
import About from './About';
import Service from './Service';
import Section1 from '../Section1';
import Maps from './Map';
import Footer from './Footer';
import Contact from './Contact';

function Homepage() {
  return (
    <div>
      <Container fluid className="pic1">
        <h2 className='letter'># Find Your Tribe </h2>
        <p className='letter1'>Discover the true spirit of Mountain Terrain bike with your tribe</p>
      </Container>
      <About />
      <Service />
      <Contact />
      <Maps />
      <Footer />
    </div>
  );
}

export default Homepage;
