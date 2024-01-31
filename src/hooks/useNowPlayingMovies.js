import React, { useEffect } from "react";
import { API_OPTION } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const appLanguage = useSelector((store) => store.config.appLanguage);

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?language=${appLanguage}&page=1`,
      API_OPTION
    );
    console.log(
      `https://api.themoviedb.org/3/movie/now_playing?language=${appLanguage}&page=1`
    );
    const json = await data.json();
    // console.log(json);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, [appLanguage]);
};

export default useNowPlayingMovies;
