import { bottom } from '@popperjs/core';
import React from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import placeholder from '../assets/Will_of_the_Ancients_item.webp';
function ItemIcon() {
  return (
    <Card className='mb-3' style={{ width: '30rem', height: '30rem'}}>
        <Card.Body className='d-flex justify-content-center align-items-center'>
            <img src={placeholder} className='rounded' style={{ width: '28rem', height: '28rem'}} alt="" />
        </Card.Body>
    </Card>
  )
}

export default ItemIcon