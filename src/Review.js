import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
function Review( {reviewsList} ) {
  return (
    <div>
       <Accordion className='mt-5 p-3' defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><h5>Reviews</h5></Accordion.Header>
        <Accordion.Body>

            {
                reviewsList.map(i=>
<>
                    <div>
                        <h6> {i.name}  </h6>
                        <p > {i.date}</p>
                        <h4>{i.rating} </h4>
                        <p>{i.comments} </p>
                    </div>
                    <hr/>
                    </>
                   
                    )
            }
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default Review