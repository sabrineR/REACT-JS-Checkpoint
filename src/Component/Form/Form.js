import React from 'react';
import './Form.css'
import {Form,Col,Button} from 'react-bootstrap';
const Formm =()=>{
    return (
      <Form className="bg">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="bensassi@gmail.com" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="Cite Avicenne-Tunis" />
  </Form.Group>
    
      <Form.Group controlId="formBasicPassword">
        <Form.Label >Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" className="test">
        Submit
      </Button>
    </Form>
    )
}
export default Formm;