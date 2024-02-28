import React from "react";
import languageList from "../utils/languageConstants";
import { useSelector } from "react-redux";

const VideoTitle = ({ overview, title }) => {
  const appLanguage = useSelector((store) => store.config.appLanguage);

  return (
    <div className="pt-[20%] px-6 md:px-16 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="font-bold text-2xl md:text-6xl">{`${languageList[appLanguage].trailerMovie}`}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/2">{`${languageList[appLanguage].trailerOverview}`}</p>
      <div className="my-4  md:m-0">
        <button className="bg-white flex  text-black py-1 md:py-4 px-3 md:px-12 text-xl hover:bg-opacity-80 rounded-lg">
          {`${languageList[appLanguage].moreInfo}`}
        </button>

        {/* <button className=" mx-2  bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
          {languageList[appLanguage].moreInfo}
        </button> */}
      </div>
    </div>
  );
};

export default VideoTitle;
