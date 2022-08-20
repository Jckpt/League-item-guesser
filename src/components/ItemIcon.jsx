import { bottom } from '@popperjs/core';
import React from 'react'
import Card from 'react-bootstrap/Card';
function ItemIcon(props) {
  return (
    <Card bg="dark" variant="dark" className='mb-3 bg-gradient' style={{ width: '24.5rem', height: '24.5rem'}}>
        <Card.Body className='d-flex justify-content-center align-items-center'>
        <img src={`items/${props.icon}/`} className='rounded img-fluid' style={{ width: '22.5rem', height: '22.5rem'}} alt="" />
        </Card.Body>
    </Card>
  )
}

export default ItemIcon