import React from 'react'

import pic3 from "../images/pic3.jpg"
import pic4 from "../images/pic4.jpg"
import pic5 from "../images/pic5.jpg"
import pic6 from "../images/pic6.jpg"
import {Container, Col, Row  } from "react-bootstrap"
import Button from 'react-bootstrap/Button';

const Side2 = () => {
  return (
    <div>
       <form >
        <input type='text' placeholder='search'className='siform'/>
       </form>

       <Container  className='si2'>
          <Row>
              <Col> <img src={pic4} className='s2pic'/> </Col>
              <Col>
              <p className='sip'>John Wick</p>
              <p className='sip'>Action Horror</p>
                
              
              </Col>
             
          </Row>
          <Row>
              <Col><img src={pic3} className='s2pic'/></Col>
              <Col>
              <p className='sip'>John Wick</p>
                 <p className='sip'>Action Horror</p>
              </Col>
              
              
          </Row>
          <Row>
              <Col><img src={pic4} className='s2pic'/></Col>
              <Col>
              <p className='sip'>John Wick</p>
              <p className='sip'>Action Horror</p>
              </Col>
              
              
          </Row>
          <div className="mb-2">
          <Button variant="primary" size="sm">
          See More
        </Button>{' '}
        </div>




       </Container>

       <Container>
          <Row>
              <Col><img  src={pic4}  className='s2pic'/></Col>
              <Col>
                <p className='sip'>John Wick</p>
                 <p className='sip'>Action Horror</p>
              
              </Col>
              
              
          </Row>
          <Row>
              <Col><img src={pic5}   className='s2pic'/></Col>
              <Col>
              <p className='sip'>John Wick</p>
                 <p className='sip'>Action Horror</p>
              </Col>
              
              
          </Row>
          <Row>
              <Col><img src={pic3} className='s2pic'/></Col>
              <Col>
              <p className='sip'>John Wick</p>
              <p className='sip'>Action Horror</p>
              </Col>
              
              
          </Row>
          
          <div className="mb-2">
          <Button variant="primary" size="sm">
          See More
        </Button>{' '}
        </div>

       </Container>
    </div>
  )
}

export default Side2
