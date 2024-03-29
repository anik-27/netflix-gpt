import { useSelector } from "react-redux";
import useMovietrailer from "../hooks/useMovietrailer";

const VideoBg = ({ movieId }) => {
  useMovietrailer(movieId);

  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  return (
    <div className="w-screen">
      <iframe
        className="aspect-video w-screen "
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&loop=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBg;
