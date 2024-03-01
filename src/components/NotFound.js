import React from "react";
import { BACKGROUND_IMAGE } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="fixed -z-10 ">
        <img
          src={BACKGROUND_IMAGE}
          alt="background-img"
          className="min-h-screen fixed h-screen w-screen object-cover "
        />
      </div>
      <div className=" flex flex-col justify-center items-center text-white w-full   md:w-9/12 absolute px-12 py-8 bg-black my-28 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-6xl mb-6">Lost your way ?</h1>
        <p className="text-xl mb-4 text-center">
          Sorry, we can't find that page. You'll find lots to explore on the
          home page.
        </p>
        <button
          onClick={() => navigate("/browse")}
          className="my-4 mx-3 cursor-pointer h-12 bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-lg"
        >
          CineFlix Home
        </button>
        <p className="font-semibold text-xl">Error code - 404</p>
      </div>
    </>
  );
};

export default NotFound;
