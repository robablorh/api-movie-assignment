/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"

const Movie = () => {
    const [movie, setMovie] = useState([])
    const {id} = useParams()

    const movieDetail = async () => {
        try {
          const response = await axios.get(`https://api.nytimes.com/svc/movies/v2/reviews/all.json?offset=20&api-key=NjVragdjYBZelPOCtAeJgpQCcD5fgvWz`);
          //console.log(response.data.results);
          setMovie(response.data && response.data.results);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
      movieDetail();
    }, [movie]);
    
    //console.log(movie)
    
    const desiredMovie = movie.filter((item) => item.display_title === id)
    console.log(desiredMovie);

  return (
    <div>
      <h1>{id}</h1>
      {desiredMovie && desiredMovie.map((movieid) => {
        return (
          <div key={movieid.display_title}>
            <img src={movieid.multimedia.src} alt={movieid.display_title} />
            <p>{movieid.headline}</p>
            <p>{movieid.summary_short}</p>
            {/* <p><a href={movieid.link.url}>{movie.link.type}</a></p>*/}
          </div>
        );
      })}
    </div>
  );
}

export default Movie
