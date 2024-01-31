import React from "react";
import { CARD_IMG_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-36 md:w-48 pr-4">
      <img alt="card-img" src={`${CARD_IMG_URL}/${posterPath}`} />
    </div>
  );
};

export default MovieCard;
