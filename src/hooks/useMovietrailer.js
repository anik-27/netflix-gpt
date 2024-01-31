import React, { useEffect } from "react";
import { API_OPTION } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

const useMovietrailer = (movieId) => {
  const dispatch = useDispatch();
  const appLanguage = useSelector((store) => store.config.appLanguage);

  const getMovieTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=${appLanguage}`,
      API_OPTION
    );
    const json = await data.json();
    const allVideos = json.results;
    const filteredVideo = allVideos.filter((video) => video.type === "Trailer");
    const trailer =
      filteredVideo.length === 0 ? allVideos[0] : filteredVideo[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieTrailer();
  }, [appLanguage]);
};

export default useMovietrailer;
