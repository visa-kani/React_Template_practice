import { useDispatch } from 'react-redux';
import {addToCart} from "../Redux/CartSlice";
import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Item({image, title, text, price}) {

    const dispatch = useDispatch()
  return (
    <div>
        <Card className='Card'>
                <Card.Img variant="top" className='zoomin' src={image} />
                <Card.Body>
                  <Card.Title className='txt5'> {title}</Card.Title>
                  <Card.Text className='txt4'>{text}</Card.Text>
                <Card.Text className='txt3 txt'>{price}</Card.Text>
                  <Button variant="primary" className='butt buttcha'  onClick={() => 
    dispatch(addToCart({
      image, title, text, price
    }))
  }><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg> </Button>{' '}
                </Card.Body>
              </Card>
    </div>
  )
}

export default Item