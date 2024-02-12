import React, { useEffect } from "react";
import GptSearchBar from "./GptSearchBar";
import GptMoviesSuggestion from "./GptMoviesSuggestion";
import { BACKGROUND_IMAGE } from "../utils/constants";
import { clearGptMoviesName, clearGptMoviesdata } from "../utils/gptSlice";
import { useDispatch } from "react-redux";

const GptSearch = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(clearGptMoviesName());
      dispatch(clearGptMoviesdata());
      // console.log("hiii");
    };
  });
  return (
    <>
      <div className="fixed -z-10">
        <img
          src={BACKGROUND_IMAGE}
          alt="background-img"
          className="min-h-screen h-screen w-screen object-cover"
        />
      </div>
      <div>
        <GptSearchBar />
        <GptMoviesSuggestion />
      </div>
    </>
  );
};

export default GptSearch;
