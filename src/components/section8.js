import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Container';
import '../App.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import news1 from '../imgndlogo/grapes.jpg';
import news2 from '../imgndlogo/vegetables.jpg';
import news3 from './../imgndlogo/pomegranate.jpg';
import Button from 'react-bootstrap/Button';

function EigthSection(){
    return(
        <div>
            <Container>
                <Row className='spacingtop'>
                    <Col>
                        <p className='txt3 auto spacingtop'><span className='auto'>Our</span> News</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg="auto">
                        <p className='hrline'></p>
                    </Col> 
                </Row>
                <Row>
                    <Col lg="auto">
                        <p className='txt4 spacingtop spacingbottom'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
                    </Col>
                </Row>
            </Container>
            <Container className='adjustwid spacingbottom'>
            <CardGroup>
              <Col lg={4} sm={12}>
              <Card className='Card'>
                  <Card.Img variant="top" src={news1} />
                  <Card.Body>
                    <Card.Title className='newstxt1'>You will vainly look for fruit on it in autumn.</Card.Title>
                    <Card.Text className='newstxt3'><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-person-lines-fill padicon" viewBox="0 0 16 16">
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
                    </svg>Admin <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-calendar-fill padicon" viewBox="0 0 16 16">
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z"/>
                    </svg> December 1970</Card.Text>
                    <Card.Text className='newstxt2'>Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.</Card.Text>
                    <Card.Text className='newstxt4'>read more<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
          </svg></Card.Text>
                    {/*  */}
                  </Card.Body>
                </Card> 
              </Col>
              <Col lg={4} sm={12}>
              <Card className='Card'>
                  <Card.Img variant="top" src={news2} />
                  <Card.Body>
                    <Card.Title className='newstxt1'> A man's worth has it's season, like tomato.</Card.Title>
                    <Card.Text className='newstxt3'><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-person-lines-fill padicon" viewBox="0 0 16 16">
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
                    </svg>Admin <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-calendar-fill padicon" viewBox="0 0 16 16">
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z"/>
                    </svg> December 1970</Card.Text>
                    <Card.Text className='newstxt2'>Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.</Card.Text>
                    <Card.Text className='newstxt4'>read more<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
          </svg></Card.Text>
                    {/*  */}
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={4} sm={12}>
              <Card className='Card'>
                  <Card.Img variant="top" src={news3} />
                  <Card.Body>
                    <Card.Title className='newstxt1'>Good  thoughts bear good fresh juicy fruit.</Card.Title>
                    <Card.Text className='newstxt3'><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-person-lines-fill padicon" viewBox="0 0 16 16">
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
                    </svg>Admin <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-calendar-fill padicon" viewBox="0 0 16 16">
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z"/>
                    </svg> December 1970</Card.Text>
                    <Card.Text className='newstxt2'>Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros. </Card.Text>
                    <Card.Text className='newstxt4'>read more<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
          </svg></Card.Text>
                    {/*  */}
                  </Card.Body>
                </Card>  
              </Col>  
             </CardGroup>
             <Button variant="primary" className='butt buttonsp '> read more</Button>{' '}
            </Container>
        </div>
    );
}
export default EigthSection;


