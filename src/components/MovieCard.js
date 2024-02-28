import React from "react";
import { CARD_IMG_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-36 md:w-48 pr-3.5 cursor-pointer group flex justify-center text-center relative overflow-hidden ">
      <img
        alt="card-img"
        className=" object-cover ease-in-out scale-95 duration-500  group-hover:scale-105"
        src={`${CARD_IMG_URL}/${posterPath}`}
      />
      <div className="absolute bg-black w-full h-full opacity-20 transition-opacity duration-500 group-hover:opacity-0" />
    </div>
  );
};

export default MovieCard;
