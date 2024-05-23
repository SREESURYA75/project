import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import './Maps.css';

function Maps() {
    return (
        <Container fluid className="Last">LOCATION
        <p className='Line'></p>
            <Row>
                <Col>
                    <iframe 
                        title="Google Maps"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.181737079579!2d77.01004236437703!3d11.024987500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85787bcf192d1%3A0xa181ca9388095a9d!2sStandard%20Towers%2C%20288%2C%20Avinashi%20Rd%2C%20Peelamedu%2C%20Coimbatore%2C%20Tamil%20Nadu%20641004!5e0!3m2!1sen!2sin!4v1715751340240!5m2!1sen!2sin" 
                        width="100%" 
                        height="300" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade" className='Last'>
                    </iframe>
                </Col>
            </Row>
        </Container>
    );
}

export default Maps;
