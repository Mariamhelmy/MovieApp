import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styles from'./Romantic.module.css';

export default function Romantic() {
    const [romanticMovies,setRomanticMovie]=useState([])
    useEffect(()=>{
        actionMov()
    },[])
    async function actionMov(){
        let api=await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=71749aa39f938e11d83ba4ddb2d93c73&with_genres=10749&language=en-US`)
       console.log(api.data);
       setRomanticMovie(api.data.results);

    }

        
    
  return (
    <div className={`${styles.roma}`}>
        <div className="container">
            <div className="row">
                {romanticMovies.map(ele=>(
                    <div className="col-md-4 mt-4 mb-5" key={ele.id}>
                                      <img src={`https://image.tmdb.org/t/p/w400${ele.poster_path}`} alt={ele.title} />

                    </div>
                ) )}
            </div>
        </div>
      
    </div>
  )
}
