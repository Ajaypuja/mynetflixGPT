import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null)
  const name = useRef(null)
  const email = useRef(null);
  const password = useRef(null);
  const handleButtonClick = () => {
    const emailVal = email.current.value.trim();
    const passwordVal = password.current.value.trim();

    console.log(emailVal);
    console.log(passwordVal);

    const message = checkValidData(emailVal, passwordVal);
    setErrorMessage(message);

  };
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="w-full h-full">
      <Header />
      <div>
        <img
          className=" object-fill w-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
          alt="bg"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className=" absolute top-1/4 left-1/3 w-1/3 bg-black/70 p-10 rounded-lg flex flex-col text-white  "
      >
        <h1 className="font-bold text-3xl px-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
          ref={name}
            className="p-4 m-4 bg-black/60 border-zinc-500 border-2 rounded"
            type="text"
            id="fullname"
            placeholder="Full Name"
            name="fullname"
            required
          />
        )}
        <input
          ref={email}
          className="p-4 m-4 bg-black/60 border-zinc-500 border-2 rounded"
          type="email"
          id="email"
          placeholder="Enter your email"
          name="email"
          required
        />

        <input
          ref={password}
          className="p-4 m-4 bg-black/60 border-zinc-500 border-2 rounded"
          type="password"
          id="password"
          placeholder="Enter your password"
          name="password"
          required
        />
        <p className="text-red-500 px-4">{errorMessage}</p>
        <button
          className=" p-4 m-4 rounded bg-red-600"
          type="submit"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="px-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
