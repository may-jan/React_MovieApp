import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);

  const getMovie = async () => {
    const fetching = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await fetching.json();
    setDetail((await json).data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className='container'>
      {loading ? (
        <h1 className='position-absolute top-50 start-50 translate-middle loading'>
          Loading...
        </h1>
      ) : (
        <div>
          <h1 className='text-center fst-italic my-5'>{detail.title}</h1>
          <img
            alt='poster'
            src={detail.large_cover_image}
            className='d-block mx-auto mb-4'
          />
          <ul className='d-flex flex-row justify-content-center align-items-center m-0 p-0'>
            {detail.genres &&
              detail.genres.map((genres) => (
                <li className='list-unstyled mx-4' key={genres}>
                  {genres}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Detail;
