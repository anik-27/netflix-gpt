import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBg from "./VideoBg";
// import { useSelector } from "react-redux";

const PrimaryContainer = () => {
  // const movies = useSelector((store) => store.movies.topRatedMovies);
  // const movies = {
  //   adult: false,
  //   backdrop_path: "/3f92DMBTFqr3wgXpfxzrb0qv8nG.jpg",
  //   genre_ids: [18, 36, 10752],
  //   id: 424,
  //   original_language: "en",
  //   original_title: "Schindler's List",
  //   overview:
  //     "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
  //   popularity: 72.147,
  //   poster_path: "/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
  //   release_date: "1993-12-15",
  //   title: "Schindler's List",
  //   video: false,
  //   vote_average: 8.572,
  //   vote_count: 15094,
  // };

  // if (!movies) return;

  // console.log(movies);

  // const filterMainMovie = () => {
  //   let smallestOverview = movies[0];
  //   movies.map((movie) => {
  //     if (movie.overview.length <= smallestOverview.overview.length) {
  //       smallestOverview = movie;
  //     }
  //   });
  //   return smallestOverview;
  // };

  const mainMovie = {
    adult: false,
    backdrop_path: "/3f92DMBTFqr3wgXpfxzrb0qv8nG.jpg",
    genre_ids: [18, 36, 10752],
    id: 424,
    original_language: "en",
    original_title: "Schindler's List",
    overview:
      "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
    popularity: 72.147,
    poster_path: "/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
    release_date: "1993-12-15",
    title: "Schindler's List",
    video: false,
    vote_average: 8.572,
    vote_count: 15094,
  };

  const { overview, title, id } = mainMovie;
  // console.log(mainMovie);

  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle overview={overview} title={title} />
      <VideoBg movieId={id} />
    </div>
  );
};

export default PrimaryContainer;
