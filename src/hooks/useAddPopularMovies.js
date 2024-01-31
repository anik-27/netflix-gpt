import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useAddPopularMovies = () => {
  const appLanguage = useSelector((store) => store.config.appLanguage);
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/popular?language=${appLanguage}&page=1`,
        API_OPTION
      );
      const json = await data.json();
      dispatch(addPopularMovies(json.results));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPopularMovies();
  }, [appLanguage]);
};

export default useAddPopularMovies;
