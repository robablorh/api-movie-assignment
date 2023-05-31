/* eslint-disable no-unused-vars */

import pic4 from "../images/pic4.jpg"
import {Container, Col, Row  } from "react-bootstrap"
import axios from "axios"
import { useState } from "react"

const Side2 = () => {
  const [picks, setPick] = useState([])

  const reviewPicks = async () => {
    try {
      //const response = await axios.get('https://api.nytimes.com/svc/movies/v2/reviews/picks.json?offset=5&api-key=KidWF1Qrlve8upGpm2HSLaF3udi3wPiG')
      //console.log(response)
    } catch (error) {
      console.error(error)
    }
  } 

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
              </Col>
             
          </Row>
       </Container>

       
    </div>
  )
}

export default Side2
