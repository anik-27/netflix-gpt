import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import languageList from "../utils/languageConstants";

export const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const appLanguage = useSelector((store) => store.config.appLanguage);
  return (
    movies && (
      <div className="bg-black ">
        <div className="mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
          <MovieList
            title={languageList[appLanguage].nowPlaying}
            movies={movies.nowPlayingMovies}
          />
          <MovieList
            title={languageList[appLanguage].topRated}
            movies={movies.topRatedMovies}
          />
          <MovieList
            title={languageList[appLanguage].popular}
            movies={movies.popularMovies}
          />
          <MovieList
            title={languageList[appLanguage].upComing}
            movies={movies.upComingMovies}
          />
        </div>
      </div>
    )
  );
};
