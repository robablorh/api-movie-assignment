/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import {Container, Col, Row} from "react-bootstrap"
import axios from "axios"
import pic1 from "../images/pic1.jpg"
import {Link} from "react-router-dom"



const Home = () => {

  const [movies, setMovies] = useState([]);
   
  const getMovies = async () => {
    try {
      const response = await axios.get("https://api.nytimes.com/svc/movies/v2/reviews/all.json?offset=20&api-key=XxvU9c516NzTgLc50XT0UPHNqfi23RIX");
      const data  = response.data.results;
      setMovies(data)
    } catch (error) {
      console.error(error)
    }
  };

  useEffect(() => {
    getMovies();
  }, [movies]);
   
  return (

    <div>
    <Container>
      <Row>
        <Col>
          <img src={pic1} className='img1'/>

          </Col>
      
       </Row>
       </Container>


      
       <Container className='homcont'>
      <Row >
          {
            movies.map((movie) => {
              return (
                     <Col key={movie.display_title}>
                          <Link to={`/${movie.display_title}`}> <img src={movie.multimedia.src} alt={movie.display_title}/></Link>
                           <p>{movie.display_title}</p>
                     </Col>
              )
            })
          }

          
      
       </Row>
       </Container>


    </div>

  )
}

export default Home
