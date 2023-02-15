import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl,imageUrlx} from '../../Constants/constant'
import axios from '../../axios'
import './Banner.css'
function Banner() {
  const  [movie,setMovie] = useState()
  useEffect (()=>{
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((responce)=>{
          console.log(responce.data.results[0])
          setMovie(responce.data.results[0])
        })

  },[])
  return (
    
    <div 
    style={{backgroundImage:`url(${movie ? imageUrl+ movie.backdrop_path : ""})`}}
    className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : ""}</h1>
            <div className='banner-buttons'>
                <button className='button'>Play</button>
                <button className='button'>Play</button>
            </div>
            <h1 className='description'>{movie ? movie.overview : ""}</h1>

        </div>
        <div className="fade_bottom"> </div>
    </div>
  )
}

export default Banner
