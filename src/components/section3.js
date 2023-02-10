import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Container';
import '../App.css';
import Item from './item';
import CardGroup from 'react-bootstrap/CardGroup';
import product1 from '../imgndlogo/product1.jpg';
import product2 from '../imgndlogo/product2.jpg';
import product3 from '../imgndlogo/product3.jpg';


function ThirdSection() {
    return(
        <div>
            <Container>
                <Row className='spacingtop'>
                    <Col>
                        <p className='txt3 auto spacingtop'><span className='auto'>Our</span> Products</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg="auto">
                        <p className='hrline'></p>
                    </Col> 
                </Row>
                <Row>
                    <Col lg="auto" sm="auto">
                        <p className='txt4 spacingtop '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
                    </Col>
                </Row>
            </Container>
            <Container className='adjustwid spacingbottom'>
             
            <CardGroup>
                <Row>
                  <Col lg={4} sm={12}>
                  <Item
                      image={product1}
                      title='Strawberry'
                      text='Per Kg'
                      price={85}
                      >
                 </Item>
                 </Col>
                 <Col lg={4} sm={12}>
                  <Item
                      image={product2}
                      title='Grapes'
                      text='Per Kg'
                      price={70}
                      >
                  </Item>
                  </Col>
                  <Col lg={4} sm={12}>
                  <Item
                      image={product3}
                      title='Lemon'
                      text='Per Kg'
                      price={35}
                      >
                  </Item>
                  {/* <Card className='Card'>
                <Card.Img variant="top" className='zoomin' src={product1} />
                <Card.Body>
                  <Card.Title className='txt5'> Strawberry</Card.Title>
                  <Card.Text className='txt4'>Per Kg</Card.Text>
                  <Card.Text className='txt3 txt'>85$</Card.Text>
                  <Button variant="primary" className='butt buttcha'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg> Add to cart</Button>{' '}
                </Card.Body>
              </Card>
              </Col>
               <Col lg={4} sm={12}>
               <Card className='Card'>
              <Card.Img variant="top" className='zoomin' src={product2} />
              <Card.Body>
                <Card.Title className='txt5'> Grapes </Card.Title>
                <Card.Text className='txt4'>Per Kg</Card.Text>
                <Card.Text className='txt3 txt'>70$</Card.Text>
                <Button variant="primary" className='butt buttcha'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
      </svg> Add to cart</Button>{' '}
              </Card.Body>
            </Card >
               </Col>
              <Col lg={4} sm={12}>
              <Card className='Card'>
              <Card.Img variant="top" className='zoomin' src={product3} />
              <Card.Body>
                <Card.Title className='txt5'> Lemon </Card.Title>
                <Card.Text className='txt4'>Per Kg </Card.Text>
                <Card.Text className='txt3 txt'>35$ </Card.Text>
                <Button variant="primary" className='butt buttcha'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
      </svg> Add to cart</Button>{' '}
              </Card.Body>
            </Card> */}
              </Col>
              </Row>
              </CardGroup>
            </Container>
        </div>
    );
}
export default ThirdSection;    