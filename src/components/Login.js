import React, { useRef, useState } from "react";
import Header from "./Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import {
  validateEmail,
  validateName,
  validatePassword,
} from "../utils/validate";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BACKGROUND_IMAGE } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInform] = useState(true);
  const [errorMessages, setErrorMessages] = useState({
    name: null,
    email: null,
    password: null,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInform(!isSignInForm);
  };

  const setDisplayName = (user, name) => {
    return updateProfile(user, {
      displayName: name,
    });
  };

  const signUp = (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //console.log(userCredential.user);
        setDisplayName(userCredential.user, name).then(() => {
          const { displayName, email, uid } = auth.currentUser;
          dispatch(addUser({ displayName, email, uid }));
          // navigate("/browse");
        });
      })
      .catch((error) => {
        const errorMessage = error.message.slice(17, -2);

        setErrorMessages((prev) => ({
          ...prev,
          password: errorMessage,
        }));
      });
  };

  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { displayName, email, uid } = userCredential.user;
        dispatch(addUser({ displayName, email, uid }));
        // navigate("/browse");
      })
      .catch((error) => {
        const errorMessage = error.message.slice(17, -2);
        setErrorMessages((prev) => ({
          ...prev,
          password: errorMessage,
        }));
      });
  };

  const handleButtonClick = () => {
    //validate
    const messages = {};
    if (!isSignInForm) {
      messages.name = validateName(name.current.value);
    }
    messages.email = validateEmail(email.current.value);
    messages.password = validatePassword(password.current.value);
    setErrorMessages(messages);

    if (messages.email || messages.password || messages.name) return;
    //authenticate
    if (!isSignInForm)
      signUp(name.current.value, email.current.value, password.current.value);
    else signIn(email.current.value, password.current.value);
  };

  return (
    <div>
      <Header isSignInPage={true} />
      <div className="absolute ">
        <img
          src={BACKGROUND_IMAGE}
          alt="background-img"
          className="min-h-screen fixed h-screen w-screen object-cover"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-4/12 absolute mx-auto left-0 right-0 my-36 p-12 bg-black text-white rounded-lg bg-opacity-80"
      >
        <h1 className="py-4 text-3xl">
          {isSignInForm ? "Sign In" : "Sign up"}
        </h1>
        {!isSignInForm && (
          <>
            <input
              ref={name}
              type="text"
              placeholder="Name"
              className="p-4 my-4 w-full bg-gray-700 rounded-md"
            />
            {errorMessages.name && <p>{errorMessages.name}</p>}
          </>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or phone number"
          className="p-4 my-4 w-full bg-gray-700 rounded-md"
        />
        {errorMessages.email && <p>{errorMessages.email}</p>}
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-md"
        />
        {errorMessages.password && <p>{errorMessages.password}</p>}
        <button
          onClick={handleButtonClick}
          className="p-4 my-6 bg-red-700 w-full rounded-md"
        >
          {isSignInForm ? "Sign In" : "Sign up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix ? Sign up now."
            : "Already a member ? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
