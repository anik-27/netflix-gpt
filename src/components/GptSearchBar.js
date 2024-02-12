import React, { useRef } from "react";
import languageList from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openAiConfig";
import { API_OPTION } from "../utils/constants";
import { addGptMoviesName, addGptMoviesData } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef();
  const appLanguage = useSelector((store) => store.config.appLanguage);

  const getMovieData = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTION
    );
    const json = await data.json();
    return json;
  };

  const handleGptSearch = async (e) => {
    e.preventDefault();

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    const gptMovieNames = gptResults.choices[0].message.content.split(",");
    dispatch(addGptMoviesName(gptMovieNames));
    let tmdbMovieData = gptMovieNames.map((movieName) =>
      getMovieData(movieName)
    );
    tmdbMovieData = await Promise.all(tmdbMovieData);
    // tmdbMovieData.sort(function (a, b) {
    //   return b.results.length - a.results.length;
    // });
    dispatch(addGptMoviesData(tmdbMovieData));
    // console.log(tmdbMovieData);
  };
  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form className="w-full md:w-1/2 bg-black grid grid-cols-12">
        <input
          ref={searchText}
          className=" p-4 m-4 col-span-9"
          type="text"
          placeholder={languageList[appLanguage].placeHolder}
        />
        <button
          onClick={handleGptSearch}
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
        >
          {languageList[appLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
