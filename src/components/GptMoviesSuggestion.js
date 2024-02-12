import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMoviesSuggestion = () => {
  const { gptMoviesName, gptMoviesData } = useSelector((store) => store.gpt);

  if (!gptMoviesData) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        {gptMoviesName.map(
          (gptMovie, index) => (
            <MovieList
              key={gptMovie}
              title={gptMovie}
              movies={gptMoviesData[index]?.results}
            />
          )
          // console.log(gptMoviesData[index])
        )}
      </div>
    </div>
  );
};

export default GptMoviesSuggestion;
