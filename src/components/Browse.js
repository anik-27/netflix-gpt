import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import PrimaryContainer from "./PrimaryContainer";
import { SecondaryContainer } from "./SecondaryContainer";
import useAddUpComingMovies from "../hooks/useAddUpcomingMovies";
import useAddTopRatedMovies from "../hooks/useAddTopRatedMovies";
import useAddPopularMovies from "../hooks/useAddPopularMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
  useNowPlayingMovies();
  useAddUpComingMovies();
  useAddTopRatedMovies();
  useAddPopularMovies();
  const showGptBar = useSelector((store) => store.gpt.showGptSearchBar);
  return (
    <div>
      <Header isSignInPage={false} />
      {showGptBar ? (
        <GptSearch />
      ) : (
        <>
          <PrimaryContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
