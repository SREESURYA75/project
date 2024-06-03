import React from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Detail from "./productdetail";
import './Cart.css';

const Product_d = ({ addToCart }) => {
    const navigate = useNavigate();

    const handleAddToWishlist = (item) => {
        const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
        if (isAuthenticated) {
            addToCart(item); // Assuming addToCart adds to wishlist
        } else {
            // Save the intended action and item to local storage
            localStorage.setItem('wishlistItem', JSON.stringify(item));
            localStorage.setItem('redirectPath', '/wishlist'); // Adjust as needed for your wishlist route
            alert("Please login to continue.");
            navigate('/login');
        }
    };

    return (
        <section style={{ backgroundColor: '#eee' }}>
            <Container className="py-5">
                {Detail.map((item) => (
                    <Row key={item.id} className="justify-content-center mb-3">
                        <Col md={12} xl={10}>
                            <Card className="shadow-0 border rounded-3">
                                <Card.Body>
                                    <Row>
                                        <Col md={12} lg={3} xl={3} className="mb-4 mb-lg-0">
                                            <div className="bg-image hover-zoom ripple rounded ripple-surface">
                                                <img src={item.Img} className="w-100" alt={item.Title} />
                                                <a href="#!">
                                                    <div className="hover-overlay">
                                                        <div className="mask" style={{ backgroundColor: 'rgba(253, 253, 253, 0.15)' }}></div>
                                                    </div>
                                                </a>
                                            </div>
                                        </Col>
                                        <Col md={6} lg={6} xl={6}>
                                            <h5>{item.Title}</h5>
                                            <div className="d-flex flex-row">
                                                <div className="text-danger mb-1 me-2">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </div>
                                                <span>310</span>
                                            </div>
                                            <div className="mt-1 mb-0 text-muted small">
                                                <span>100% cotton</span>
                                                <span className="text-primary"> • </span>
                                                <span>Light weight</span>
                                                <span className="text-primary"> • </span>
                                                <span>Best finish<br /></span>
                                            </div>
                                            <div className="mb-2 text-muted small">
                                                <span>Unique design</span>
                                                <span className="text-primary"> • </span>
                                                <span>For men</span>
                                                <span className="text-primary"> • </span>
                                                <span>Casual<br /></span>
                                            </div>
                                            <p className="text-truncate mb-4 mb-md-0">
                                                There are many variations of passages of Lorem Ipsum available, but the
                                                majority have suffered alteration in some form, by injected humour, or
                                                randomised words which don't look even slightly believable.
                                            </p>
                                        </Col>
                                        <Col md={6} lg={3} xl={3} className="border-sm-start-none border-start">
                                            <div className="d-flex flex-row align-items-center mb-1">
                                                <h4 className="mb-1 me-1">${item.Price}</h4>
                                                <span className="text-danger"><s>$20.99</s></span>
                                            </div>
                                            <h6 className="text-success">Free shipping</h6>
                                            <div className="d-flex flex-column mt-4">
                                                <Button variant="primary" size="sm">Details</Button>
                                                <Button variant="outline-primary" size="sm" className="mt-2" onClick={() => handleAddToWishlist(item)}>
                                                    Add to wishlist
                                                </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                ))}
            </Container>
        </section>
    );
}

export default Product_d;
