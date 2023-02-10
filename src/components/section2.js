import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../App.css';
import refresh from '../imgndlogo/refresh.png';
import phone from '../imgndlogo/phoneorg.png';
import truck from '../imgndlogo/truck-side.png';

function SecondSection(){
    return(
        <div className='coloring'>
            <Container >
                <Row>    
                <Col lg={1} sm={3}> 
                    <p className='circle1'>
                    <img
                        src={truck}
                        width="28"
                        height="28"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                        />
                    </p>
                </Col>
                <Col lg={3} sm={9}>
                    <p className='txt1'>Free Shipping</p>
                    <p className='txt2'>when order over $75</p>
                </Col>
                <Col lg={1} sm={3}>
                    <p className='circle1'>
                    <img
                        src={phone}
                        width="23"
                        height="23"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                        />
                    </p>
                </Col>
                <Col lg={3} sm={9}>
                <p className='txt1'>24/7 Support</p>
                <p className='txt2'>Get support all day</p>
                </Col>
                <Col lg={1} sm={3}>
                    <p className='circle1'>
                    <img
                        src={refresh}
                        width="23"
                        height="23"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                        />
                    </p>
                </Col>
                <Col lg={3} sm={9}>
                <p className='txt1'>Refund</p>
                <p className='txt2'>Refund within 3 days</p>
                </Col>
                </Row>
            </Container>
        </div>
    );
}
export default SecondSection;