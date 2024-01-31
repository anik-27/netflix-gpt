import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBg from "./VideoBg";
import { useSelector } from "react-redux";

const PrimaryContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  if (!movies) return;

  // console.log(movies);

  const filterMainMovie = () => {
    let smallestOverview = movies[0];
    movies.map((movie) => {
      if (movie.overview.length <= smallestOverview.overview.length) {
        smallestOverview = movie;
      }
    });
    return smallestOverview;
  };

  const mainMovie = filterMainMovie();
  const { overview, title, id } = mainMovie;

  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle overview={overview} title={title} />
      <VideoBg movieId={id} />
    </div>
  );
};

export default PrimaryContainer;
