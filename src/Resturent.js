import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Resturent.css'
import { Link } from 'react-router-dom';
import { getRestuarants } from './actions/restAction';
import { useDispatch, useSelector } from 'react-redux';







function Resturent() {






const dispatch=useDispatch()








useEffect(()=>{

dispatch(getRestuarants)
   

},[])

// why using curly bracket this is distructuring 
const {restList}=useSelector(state=>state.reducer1)
console.log(restList);

    return(
    <Row className='ms-5 mb-2 p-2'>
        {

          restList.map(rest=>(

      <Col   lg={4} md={6}>
<Link to={`/viewRest/${rest.id}`} id='l1'  >
<Card  id='c1' className='mt-5 ms-5' style={{ width: '18rem' }}>

              <Card.Img variant="top" src={rest.photograph} />
              <Card.Body>
                <Card.Title>{rest.name}</Card.Title>
                <Card.Text style={{color:'white'}}   >
                    {rest.address}
                </Card.Text>
              </Card.Body>
            </Card>
    
</Link>     
 </Col>
          ))

        }

    </Row>
  )
}

export default Resturent