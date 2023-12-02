import React, { FC } from 'react';

interface MovieSearchFormpProps {
  searchMovies: (value: string) => void;
}

const MovieSearchForm: FC<MovieSearchFormpProps> = ({ searchMovies }) => {
  return (
    <input
      type="text"
      placeholder="Type to search..."
      className="input main__input"
      onChange={(e) => searchMovies(e.currentTarget.value)}
    />
  );
};

export default MovieSearchForm;
