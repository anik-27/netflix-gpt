import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className="py-4 text-white text-3xl">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex ">
          {movies?.map((movie) => {
            if (!movie.poster_path) return null;
            else {
              return (
                <MovieCard key={movie.id} posterPath={movie.poster_path} />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
