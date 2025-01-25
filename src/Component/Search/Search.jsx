 import React, { useEffect, useState } from 'react'
import styles from './Search.module.css'
import axios from 'axios'

export default function Search() {
    const [searchQuery, setSearchQuery] = useState('');  // حفظ النص الذي يبحث عنه المستخدم
    const [movies, setMovies] = useState([]);
      // حفظ الأفلام التي تم جلبها من API

      const getMovies=async()=>{
        if(!searchQuery) return;
        try{
          const api =await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=71749aa39f938e11d83ba4ddb2d93c73&query=${searchQuery}`)
          setMovies(api.data.results)
        }
        catch(error){
          console.error("error fetching movies",error)
        }
      }
  
    // استخدام useEffect لتنفيذ البحث كلما تغير searchQuery

    useEffect(() => {
      // استدعاء دالة البحث
      getMovies()
  
    }, [searchQuery]); 
    const handleSearchChange = (e) => {
      setSearchQuery(e.target.value);  // تحديث قيمة searchQuery مع النص المدخل
  };
   
    return (
      <>
        <div className={`${styles.hook}`}>
          <div className={`${styles.hoka}`}>
            <div className={`${styles.search}`}>
              <div className={styles.divo}>
                <form className={`${styles.size} d-flex`} role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button className="btn btn-outline-danger" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
           <div>
                {movies.length > 0 ? (
                  <div className="container">
                    <div className="row">
                      {movies.map((movie) => (
                      <div className="col-md-3 mt-4" key={movie.id}>
                        
                                  <img
                                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                    alt={movie.title}
                                    style={{ width: '200px', borderRadius: '10px' }}
                                />
                                <h3>{movie.title}</h3>
                      </div>
                          ))}
                    </div>
                  </div>
                    
                ) : (
                    <p className='text-danger text-center py-5 fs-1 mb-0'>"Please enter the name of the movie you want to search for."</p>
                )}
            </div> 
           
        </div> 
        
      </>
    );
    
}
