import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import strawberry from '../imgndlogo/strawberryimg.jpg'
import '../App.css';
import Button from 'react-bootstrap/Button';

function FourthSection() {
    return(
        <div  className='concol'>
            <Container>
                <Row>
                    <Col lg="6">
                        <img src={strawberry} alt='hello' width={500} />
                    </Col>
                    <Col lg="6" >
                        <p className='txt3 adjusttxt'><span>Deal</span> of the month  </p>
                        <p className='txt6 adjusttxt'>HIKAN STRAWBERRY</p>
                        <p className='adjusttxt lihi'>Quisquam minus maiores repudiandae nobis, minima saepe id, fugit ullam <br></br>
                        similique! Beatae, minima quisquam molestias facere ea. Perspiciatis unde omnis<br></br> 
                        iste natus error sit voluptatem accusant</p>
                        <Row className='gap2 aligncd'>
                        <p id="result"></p>
                        </Row>    
                        <Col sm="11" lg="3">
                        <Button variant="primary" className='butt buttcha'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </svg> Add to cart</Button>{' '}
                        </Col>
                    </Col>   
                    </Row>
            </Container>
        </div>
    );
}
function countdown(){
    let dateofcountdown = new Date("Feb 14, 2023, 12:00:00").getTime();
    let countlimit = setInterval(function(){
        let now = new Date().getTime();
        let distance = dateofcountdown - now;
        let days = Math.floor(distance / (1000 * 60 * 60 *24));
        let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        let minutes =  Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
        let seconds = Math.floor(distance % (1000 * 60) / (1000));
        document.getElementById("result").innerHTML= "<b>"+ days +"<strong>" + "days" + "</strong>" + "</b>" + "<b>"+ hours +"<strong>" + "hours" + "</strong>" + "</b>" +"<b>"+ minutes +"<strong>" + "mins" + "</strong>" + "</b>" +"<b>"+ seconds +"<strong>" + "secs" + "</strong>" + "</b>" 


        if(distance < 0){
            clearInterval(countlimit);
            document.getElementById("result").innerHTML = "Expired";
        }
    }
    )
}
countdown();
export default FourthSection;
