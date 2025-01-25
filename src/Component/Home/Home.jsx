import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'
import axios from 'axios';
import { Link } from 'react-router-dom';






export default function Home() {
  
const[trendingMovie,setTrendingMovie]=useState([])
useEffect(()=>{
  getData()
},[])
async function getData(){
  let api= await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=71749aa39f938e11d83ba4ddb2d93c73&page=1`)
  console.log(api.data.results);
  setTrendingMovie(api.data.results)
  
}


  return (
    <div id={`${styles.home}`}>
      <h1 className='ms-5'>Movies</h1>
      <p className='w-50 ms-5'>Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.
      </p>
       <div className="container">
        <div className="row">
          {trendingMovie.map(ele=>(
            <div className="col-md-4 mt-4 mb-5" key={ele.id}>
              <Link to={`/details/${ele.id}`}>
              <img src={`https://image.tmdb.org/t/p/w400${ele.poster_path}`} alt={ele.title} />
              </Link>
              
            </div>

          

          ))}
        </div>
      </div> 
      
    </div>
  )
}
