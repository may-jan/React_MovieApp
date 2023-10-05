import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Movie = ({ id, coverImg, title, year, rating }) => {
  return (
    <div className='col m-4 p-0'>
      <Link
        to={`${process.env.PUBLIC_URL}/movie/${id}`}
        className='text-white text-decoration-none'
      >
        <div className='position-relative'>
          <p className='h2 mx-auto mb-0 position-absolute top-50 start-50 translate-middle'>
            {rating} / 10
          </p>
          <img alt='poster' src={coverImg} className='d-block mx-auto' />
        </div>
        <p className='h5 text-center'>
          {title} ({year})
        </p>
      </Link>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  // style: PropTypes.object,
};

export default Movie;
