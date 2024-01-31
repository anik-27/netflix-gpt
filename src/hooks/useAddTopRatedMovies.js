import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useAddTopRatedMovies = () => {
  const dispatch = useDispatch();
  const appLanguage = useSelector((store) => store.config.appLanguage);

  const getTopRatedMovies = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?language=${appLanguage}&page=1`,
        API_OPTION
      );
      const json = await data.json();
      dispatch(addTopRatedMovies(json.results));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTopRatedMovies();
  }, [appLanguage]);
};

export default useAddTopRatedMovies;
