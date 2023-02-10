import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import '../App.css';
import Row from 'react-bootstrap/esm/Row';
import Button from 'react-bootstrap/Button';


function SeventhSection(){
    return(
        <div className='banner'>
            <Container>
               <Row>
                    <Col>
                        <p className=' bannertxt1 '>December sale is on!<br></br>with big<span className='adjusting'> Discount...</span></p>
                    </Col>
               </Row>
               <Row>
                    <Col>
                        <p className='bannertxt2'>Sale!<br></br>Upto<span className='adjusting'>50%</span> off</p>
                    </Col>
               </Row>
               <Row>
                    <Col sm={4}>
                    <Button variant="primary" className='butt buttcha'>Shop Now</Button>{' '}
                    </Col>
               </Row>
            </Container>
        </div>
        
    );
}

export default SeventhSection;