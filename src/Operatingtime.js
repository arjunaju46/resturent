import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function Operatingtime( {WorkingTime} ) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
        <Button variant="warning" onClick={handleShow}>
        Operating Hours
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><h2 className='text-center'>Operating Hours</h2></Modal.Title>
      
        </Modal.Header>
        <Modal.Body>

        <ListGroup>
      <ListGroup.Item>Monday {WorkingTime.Monday} </ListGroup.Item>
      <ListGroup.Item>tuesday {WorkingTime.Tuesday} </ListGroup.Item>
      <ListGroup.Item>wednesday {WorkingTime.Wednesday}</ListGroup.Item>
      <ListGroup.Item>thursday {WorkingTime.Thursday}</ListGroup.Item>
      <ListGroup.Item>friday {WorkingTime.Friday}</ListGroup.Item>
      <ListGroup.Item>saturday {WorkingTime.Saturday}</ListGroup.Item>
      <ListGroup.Item>sunday {WorkingTime.Sunday}</ListGroup.Item>

    </ListGroup>





        </Modal.Body>
      </Modal>  
    </div>
  )
}

export default Operatingtime