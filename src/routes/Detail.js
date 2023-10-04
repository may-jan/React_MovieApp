import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});

  const getMovie = async () => {
    const fetching = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await fetching.json();
    console.log(json);
    setDetail((await json).data.movie);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      <h1>{detail.title}</h1>
      <img alt='poster' src={detail.medium_cover_image} />
    </>
  );
};

export default Detail;
