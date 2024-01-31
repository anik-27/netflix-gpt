import React, { useRef } from "react";
import openai from "../utils/openAiConfig";

const GptSearchBar = () => {
  const searchText = useRef();

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

    console.log(gptResults.choices[0]);
  };
  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form className="w-full md:w-1/2 bg-black grid grid-cols-12">
        <input
          ref={searchText}
          className=" p-4 m-4 col-span-9"
          type="text"
          placeholder="What would you like to watch today ?"
        />
        <button
          onClick={handleGptSearch}
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
