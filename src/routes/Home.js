import React, { useEffect, useState } from 'react';
import Movie from '../components/Movie';
import '../styles/Home.css';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className='Home container'>
      {loading ? (
        <h1 className='loading position-absolute top-50 start-50 translate-middle loading'>
          Loading...
        </h1>
      ) : (
        <div>
          <div className='main row'>
            <h1 className='title text-center fw-bold my-5 p-0'>MOVIE</h1>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
                year={movie.year}
                rating={movie.rating}
                className='col'
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
