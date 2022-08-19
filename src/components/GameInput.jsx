import React from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function GameInput() {
  return (
    <Card style={{ width: '30rem' }}>
      <Card.Body>
        <Form.Control
        type="text"
        placeholder="Name of the item?"
        />
      </Card.Body>
    </Card>
  )
}

export default GameInput