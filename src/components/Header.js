import React, { useEffect } from "react";
import { removeUser, addUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import {
  NETFLIX_LOGO,
  SUPPORTED_LANGUAGES,
  USER_LOGO,
} from "../utils/constants";
import { toggleShowGptSearchBar } from "../utils/gptSlice";
import languageList from "../utils/languageConstants";
import { changeAppLanguage } from "../utils/configSlice";

const Header = ({ isSignInPage }) => {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }

      return () => unsubscribe();
    });
  }, []);
  const username = useSelector((store) => store?.user?.displayName);
  const showGptBar = useSelector((store) => store.gpt.showGptSearchBar);
  const appLanguage = useSelector((store) => store.config.appLanguage);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(removeUser());
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
    // navigate("/");
  };

  const handleLanguageChange = (e) => {
    dispatch(changeAppLanguage(e.target.value));
  };

  const handleGptSearchClick = () => {
    dispatch(toggleShowGptSearchBar());
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img src={NETFLIX_LOGO} alt="logo" className="  w-44 mx-auto md:mx-0" />
      {!isSignInPage && (
        <div className="flex p-2 justify-between">
          {!showGptBar && (
            <select
              className="my-4 mx-3 cursor-pointer h-12 bg-black text-white font-bold py-2 px-4 rounded-lg"
              onChange={(e) => handleLanguageChange(e)}
              value={appLanguage}
            >
              {SUPPORTED_LANGUAGES.map((language) => (
                <option key={language.identifier} value={language.identifier}>
                  {language.value}
                </option>
              ))}
            </select>
          )}
          <div className="hidden md:block ">
            <img
              src={USER_LOGO}
              alt="user-logo"
              className="w-12  cursor-pointer h-12 mt-4 mx-3 rounded-lg"
            />
            <p className="text-white text-center font-bold">{username}</p>
          </div>
          <button
            onClick={handleGptSearchClick}
            className="my-4 mx-3 cursor-pointer h-12 bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-lg"
          >
            {showGptBar
              ? languageList[appLanguage].home
              : languageList[appLanguage].gptSearch}
          </button>
          <button
            onClick={handleLogout}
            className="my-4 mx-3 cursor-pointer h-12 bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-lg"
          >
            {languageList[appLanguage].logout}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
