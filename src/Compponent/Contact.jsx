import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'font-awesome/css/font-awesome.min.css';
import './contact.css'

function Contact() {
    return (
        <section className="contact py-5 bg-light" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h4>Get in touch</h4>
                        <hr />
                    </div>
                    <div className="col-md-6">
                        <div className="address">
                            <h5>Address:</h5>
                            <ul className="list-unstyled">
                                <li>T-Mobile Customer Relations</li>
                                <li>PO Box 37380</li>
                                <li>Albuquerque, NM 87176-7380</li>
                            </ul>
                            <p>Please don't send anything to this address.</p>
                        </div>
                        <div className="email">
                            <h5>Email:</h5>
                            <ul className="list-unstyled">
                                <li>info@email.com</li>
                                <li>info@email.com</li>
                            </ul>
                        </div>
                        <div className="phone">
                            <h5>Phone:</h5>
                            <ul className="list-unstyled">
                                <li>+91-8800XXXXXX34</li>
                                <li>+91-8800XXXXXX34</li>
                            </ul>
                        </div>
                        <hr />
                        <div className="social">
                            <ul className="list-inline list-unstyled">
                                <li className="list-inline-item">
                                    <a href="#"><i className="fa fa-facebook-square fa-2x"></i></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#"><i className="fa fa-google-plus-square fa-2x"></i></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#"><i className="fa fa-youtube-play fa-2x"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <form>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <input id="FullName" name="FullName" placeholder="Full Name" className="form-control" type="text" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <input id="MobileNo" name="MobileNo" placeholder="Mobile No." className="form-control" required="required" type="text" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <select id="inputState" className="form-control">
                                                <option selected>Choose...</option>
                                                <option>New Buyer</option>
                                                <option>Auction</option>
                                                <option>Complaint</option>
                                                <option>Feedback</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-12">
                                            <textarea id="comment" name="comment" cols="40" rows="5" placeholder="Your Message" className="form-control"></textarea>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <button type="button" className="btn btn-danger">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
