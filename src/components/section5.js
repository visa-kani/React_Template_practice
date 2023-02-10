import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/esm/Container';
import owner1 from './../imgndlogo/avatar1.png';
import owner2 from './../imgndlogo/avatar 11.png';
import owner3 from './../imgndlogo/avatar3.png';
import whitee from './../imgndlogo/whitee.jpg';
// import black from './../imgndlogo/black.jpg';


function FifthSection() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img    
          className="d-block w-100"
          src={whitee}
          alt="First slide"
          height={500}
        />
        <Carousel.Caption>
            <Container >
                <img className='siz buttcha' src={owner1} alt="hello" />
            </Container>
          <h3 className='S5txt1'>Saira Hakim</h3>
          <p className='S5txt2'>Local Shop Owner</p>
          <p className='S5txt3'>" Sed ut perspiciatis unde omnis iste natus error veritatis et  quasi architecto beatae<br></br>
           vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus<br></br> 
           error sit voluptatem accusantium "</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={whitee}
          alt="Second slide"
          height={500}
        />
        <Carousel.Caption>
        <img className='siz buttcha' src={owner2} alt="hello" />
          <h3 className='S5txt1'>David Niph</h3>
          <p className='S5txt2'>Local Shop Owner</p>
          <p className='S5txt3'>" Sed ut perspiciatis unde omnis iste natus error veritatis et  quasi architecto beatae<br></br>
           vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus<br></br> 
           error sit voluptatem accusantium "</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={whitee}
          alt="Third slide"
          height={500}
        />
        <Carousel.Caption>
        <img className='siz buttcha' src={owner3} alt="hello" />
          <h3 className='S5txt1'>Jobco Sikim</h3>
          <p className='S5txt2'>Local Shop Owner</p>
          <p className='S5txt3'>
          " Sed ut perspiciatis unde omnis iste natus error veritatis et  quasi architecto beatae<br></br>
           vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus<br></br> 
           error sit voluptatem accusantium "
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default FifthSection;