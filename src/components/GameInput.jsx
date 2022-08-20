import {React, useState} from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function GameInput({setText, text}) {


const onChangeHandler = event => {
  setText(event.target.value);
};
  return (
    <Card bg="dark" className='bg-gradient' variant="dark" style={{ width: '24.5rem' }}>
      <Card.Body>
        <Form.Control 
        type="text"
        placeholder="Name of the item"
        className='text-center text-white bg-dark border-dark'
        value={text}
        onChange={onChangeHandler}
        />
      </Card.Body>
    </Card>
  )
}

export default GameInput