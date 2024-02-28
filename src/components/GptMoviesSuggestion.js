import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import languageList from "../utils/languageConstants";

const GptMoviesSuggestion = () => {
  const { gptMoviesName, gptMoviesData } = useSelector((store) => store.gpt);
  const appLanguage = useSelector((store) => store.config.appLanguage);

  if (!gptMoviesData) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      {gptMoviesName.length <= 4 ? (
        <div className="text-lg p-4 m-4 ">
          <p className="py-2">{languageList[appLanguage].errorPage.error}</p>
          <p>{languageList[appLanguage].errorPage.title}</p>
          <ul className="list-disc">
            <div className="pl-8">
              {languageList[appLanguage].errorPage.suggestions.map(
                (suggestion) => (
                  <li>{suggestion}</li>
                )
              )}
            </div>
          </ul>
        </div>
      ) : (
        <div>
          {gptMoviesName.map((gptMovie, index) => {
            return (
              <MovieList
                key={gptMovie}
                title={gptMoviesData[index]?.results[0]?.title}
                movies={gptMoviesData[index]?.results}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default GptMoviesSuggestion;
