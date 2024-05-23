
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Service2.css';


function Service2(){
    return(
        <Container fluid>

<div className='Innerbox'>
                <p className="Letter">Our services</p>
            </div>
            <Row className='service-row'>
                <Col md={3}>
                    <div className='Box1'>
                        <div className='icon1'></div>
                        <div className='iconname1'>WORKOUT</div>
                        <div className='content1'>Intense cycling workout featuring high-intensity intervals for maximum cardiovascular and strength benefits.</div>
                    </div>
                </Col>
                <Col md={3}>
                    <div className='Box1'>
                        <div className='icon2'></div>
                        <div className='iconname1'>COMMUNITY</div>
                        <div className='content1'>Intense cycling workout featuring high-intensity intervals for maximum cardiovascular and strength benefits.</div>
                    </div>
                </Col><Col md={3}>
                    <div className='Box1'>
                        <div className='icon3'></div>
                        <div className='iconname1'>MEMBERSHIP</div>
                        <div className='content1'>Intense cycling workout featuring high-intensity intervals for maximum cardiovascular and strength benefits.</div>
                    </div>
                </Col>
                <Col md={3}>
                    <div className='Box1'>
                        <div className='icon4'></div>
                        <div className='iconname1'>EVENTS</div>
                        <div className='content1'>Intense cycling workout featuring high-intensity intervals for maximum cardiovascular and strength benefits.</div>
                    </div>
                </Col>
            </Row>
            

        </Container>
    )
}
export default Service2