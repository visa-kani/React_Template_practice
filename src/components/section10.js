import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function TenthSection(){
    return(
        // <div className='footer'>
        //     <Container fluid>
        //         <Row>
        //             <Col lg={4}>
        //             <p className='footertxt1 '>About Us</p></Col>
        //             <Col lg={4}>
        //             <p className='footertxt1 '>Get in Touch</p></Col>
        //             <Col lg={4}>
        //             <p className='footertxt1 '>Pages</p></Col>
        //             <Col lg={4}>
        //             <p className='footertxt1'>Subscribe</p></Col>
        //         </Row>
        //     </Container>
        // </div>
        <div className='footer'>
            <Container  >
                <Row>
                    <Col sm={8} lg={4}><p className='footertxt1'>About us</p>
                    <p className='footertxt2'>Ut enim ad minim veniam perspiciatis <br></br>unde omnis iste natus error sit <br></br> voluptatem accusantium doloremque  <br></br>laudantium, totam rem aperiam,<br></br> eaque ipsa quae.</p>
                    </Col>
                    <Col sm={8} lg={4}><p className='footertxt1 '>Get in Touch</p>
                    <p className='footertxt2 lihi'>34/8, East Hukupara, Gifirtok, Sadan.<br></br>
                    support@domain.com<br></br>
                    +00 111 222 3333</p>
                    </Col>
                    <Col sm={8} lg={4}><p className='footertxt1'>Pages</p>
                    <p className='footertxt2'></p>
                    </Col>
                    <Col sm={8} lg={4}><p className='footertxt1'> Subscribe</p>
                    <p className='footertxt2'></p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default TenthSection;