import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../App.css';
import Button from 'react-bootstrap/Button';

function SixthSection(){
    return(
        <div  className='pink'>
            <Container>
                <Row>
                    <Col lg={6} className='videobg'></Col>
                    <Col lg={6}>
                        <p className='videotxt1'>Since year 1999</p>
                        <p className='txt3 adjusttxt'> We are <span>fruitkha</span></p>
                        <p className='adjusttxt lihi'>Etiam vulputate ut augue vel sodales. In sollicitudin neque et<br></br> 
                        massa porttitor vestibulum ac vel nisi. Vestibulum placerat eget<br></br> 
                        dolor sit amet posuere. In ut dolor aliquet, aliquet sapien sed,<br></br> 
                        interdum velit. Nam eu molestie lorem.</p>
                        <p className='adjusttxt lihi'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br></br> 
                        Sapiente facilis illo repellat veritatis minus, et labore minima<br></br> 
                        mollitia qui ducimus.</p>
                        <Button variant="primary" className='butt buttcha'> know more</Button>{' '}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default SixthSection;