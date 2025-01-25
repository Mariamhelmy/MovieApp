import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Details.module.css'

const Details = () => {
  const { id } = useParams();  // استخراج الـ ID من الرابط
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect( () => {
    const fetchMovieDetails = async () => {

    const api = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=71749aa39f938e11d83ba4ddb2d93c73`)
    console.log(api.data);
    setMovieDetails(api.data)
    }
    
    fetchMovieDetails();
  }, [id]);  // إعادة التحميل عندما يتغير الـ ID

  if (!movieDetails) {
    return <div>جاري تحميل التفاصيل...</div>;
  }

  return (
    <div className={`${styles.color}`}>
        <div className= {`${styles.conta}   container `} >
            <div className="row ">
                <div className={`${styles.hola}  col-md-4`}>
                    <img
                       src={`https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`}
                       alt={movieDetails.title}
                       className={`${styles.imago}`}
                     />
                </div>
                <div className="col-md-8  w-50">
                    <h1 className={`${styles.non}`}>{movieDetails.title}</h1>
      
                      <p>{movieDetails.overview}</p>
                      <p><strong> Release Date :</strong>{movieDetails.release_date}</p>
                       <p><strong>Rating:</strong>{movieDetails.vote_average}<i className={`${styles.icon} fa-solid fa-star`}></i><i className={`${styles.icon} fa-solid fa-star`}></i><i className={`${styles.icon} fa-solid fa-star`}></i><i class="fa-regular fa-star"></i></p>
                </div>
            </div>
        </div>
      
    </div>
  );
};

export default Details;

