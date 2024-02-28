import React, { useRef, useState } from "react";
import languageList from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openAiConfig";
import { API_OPTION } from "../utils/constants";
import { addGptMoviesName, addGptMoviesData } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef();
  const appLanguage = useSelector((store) => store.config.appLanguage);
  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const hasOnlySpaces = (str) => {
    for (const char of str) {
      if (char !== " ") return false;
    }
    return true;
  };

  const getMovieData = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=${appLanguage}&page=1`,
      API_OPTION
    );
    const json = await data.json();
    return json;
  };

  const handleGptSearch = async (e) => {
    e.preventDefault();
    if (
      searchText.current.value === "" ||
      hasOnlySpaces(searchText.current.value)
    ) {
      setShowError(true);
      return;
    }
    setIsLoading(true);
    setShowError(false);
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya. if the query does notmatch any movies, send a simple text saying could not find movies";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    console.log(gptResults);

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
    setIsLoading(false);
  };
  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form className="w-full md:w-1/2 bg-black rounded-m grid grid-cols-12">
        <input
          ref={searchText}
          className={
            showError
              ? "p-4 mt-4 mb-2 mx-4 col-span-9 border-solid border-2 border-red-700"
              : "p-4 m-4 col-span-9"
          }
          type="text"
          placeholder={languageList[appLanguage].placeHolder}
        />

        <button
          type="button"
          onClick={handleGptSearch}
          loading={true}
          className="col-span-3 flex justify-center items-center m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
        >
          {isLoading && (
            <svg
              width="20"
              height="20"
              fill="currentColor"
              class="mr-2 animate-spin"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
            </svg>
          )}
          {isLoading
            ? languageList[appLanguage].loading
            : languageList[appLanguage].search}
        </button>

        {showError && (
          <p className="pb-2 mx-4 col-span-9 text-lg font-semibold text-red-700">
            Input field cannot be empty
          </p>
        )}
      </form>
    </div>
  );
};

export default GptSearchBar;
