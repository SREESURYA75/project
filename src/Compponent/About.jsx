import { useState } from "react";
import { Container } from "react-bootstrap";
import "./About.css";
import Button from 'react-bootstrap/Button';
import Readmore from './Readmore'; 

function About(){
    const [showReadmore, setShowReadmore] = useState(false); // State to track if Readmore should be shown

    const handleReadmoreClick = () => {
        setShowReadmore(true); 
    }

    return(
        <div>
            <Container fluid className="box1">
                <h1 className="Pic1"> About our cycle Store</h1>
                <p className="abouttext">
                    It is a long established fact that a reader will be distracted by the readable
                    content of a page when looking at its layout. The point of using Lorem Ipsum is 
                    that it has a more-or-less normal distribution of letters
                </p>
                <div className="Data">
                    <div className="Minidata"></div>
                </div>
                <div className="text-center mt-3">
                    
                </div>
            </Container>
            {showReadmore && <Readmore />} 
        </div>
    )
}
export default About;
