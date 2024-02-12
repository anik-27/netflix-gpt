import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { addUpComingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useAddUpComingMovies = () => {
  const dispatch = useDispatch();
  const appLanguage = useSelector((store) => store.config.appLanguage);

  const getUpcomingMovies = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?language=${appLanguage}&page=1`,
        API_OPTION
      );
      const json = await data.json();
      dispatch(addUpComingMovies(json.results));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUpcomingMovies();
  }, [appLanguage]);
};

export default useAddUpComingMovies;
