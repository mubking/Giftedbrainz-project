"use client";
import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { PiPasswordBold } from "react-icons/pi";
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Signup() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });
  
  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    // You can perform validation here before making the API call

    try {
      const response = await fetch('/api/signup/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDetails),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage(data.message);
        setError('');
        // Clear the form fields after successful registration
        setUserDetails({
          email: '',
          password: '',
          username: '',
        });
        setLoading(false)
        router.push("/signin");
      } else {
        setError(data.message);
        setSuccessMessage('');
        setLoading(false)
      }
    } catch (error) {
      console.log(error);
      // setError('An error occurred during registration');
      setSuccessMessage('');
      setLoading(false)
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex flex-col w-full justify-center items-center h-min-h-screen bg-[white] p-5 ">
      <div class="tex  relative top-10">
        <img src="/brainz.png" alt="" style={{ height: "30vh" }} />
      </div>
      <h1 className="text-3xl relative bottom-">Sign up</h1>
      {error && <p className="error">{error}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 ">
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="username" className="text-xl">
            Username
          </label>
          <div className="field flex w-full ">
            <div className="fas flex justify-center items-center">
              <AiOutlineUser style={{ height: "100%", width: "100%" }} />
            </div>
            <input
              type="text"
              placeholder=" enter your username "
              className="w-full"
              id="username"
              name="username"
              value={userDetails.username}
              onChange={handleChangeInput}
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="email" className="text-lg">
            Enter Your Email
          </label>
          <div className="field flex w-full ">
            <div className="fas flex justify-center items-center">
              <MdEmail style={{ height: "100%", width: "100%" }} />
            </div>
            <input
              type="email"
              value={userDetails.email}
              placeholder=" enter your Email "
              required
              className="w-full"
              name="email"
              id="email"
              onChange={handleChangeInput}
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="password" className="text-xl">
            Password
          </label>
          <div className="field flex items-center relative">
            <div class="fas flex justify-center items-center">
              {" "}
              <PiPasswordBold style={{ height: "100%", width: "100%" }} />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={userDetails.password}
              onChange={handleChangeInput}
              id="password"
              name="password"
              className="w-full py-2 px-3 bg-gray-800 text-gray-300 rounded-md border border-gray-600"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-2 top-2 p-2 text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              {showPassword ? (
                <IoEyeSharp style={{ height: "100%", width: "100%" }} />
              ) : (
                <IoEyeOffSharp
                  style={{ height: "100%", width: "100%", fontSize: "20px" }}
                />
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-row gap-3 ">
          <div className="">
            <input type="checkbox" className="h-8 w-8 rounded-md" />{" "}
          </div>
          <div>
            <p>
              I Have Agree To The{" "}
              <span className="text-[#5852FE]"> Terms & Conditions </span>{" "}
              <br />
              And The <span className="text-[#5852FE]">
                Privacy & Policy
              </span>{" "}
              of This Website.
            </p>
          </div>
        </div>
        <div className="sign up flex items-center gap-5">
          <button
            // href={"/signin"}
            disabled={loading}
            class="flex text-white bg-indigo-500 border-0 py-2  px-20 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            {loading ? "Signing uP" : "Sign Up"}
          </button>
          <h2>or</h2>
          <span class="inline-flex mu  text-white bg-[transparent] border-0 py-3 px-10 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            <FcGoogle />
          </span>
        </div>

        <div class="link">
          Already Have An Existing Account?
          <a href="#">
            {" "}
            <span className="text-[#5852FE]">Click Here.....</span>
          </a>
        </div>
      </form>
      <div className=" bg-[#5852fe] w-[100%] flex flex-row gap-10 justify-center items-center p-5 text-white mt-5 one">
        <div className="icon flex flex-row items-center gap-3">
          <div>
            <BsArrowLeft />
          </div>
          <div className="footer">
            {" "}
            <a href="/">Back To home</a>
          </div>
        </div>
        <div className="footer">
          {" "}
          <a href="/">Privacy & Policy</a>
        </div>
        <div>
          {" "}
          <a href="/">Terms & Condition</a>
        </div>
      </div>
    </div>
  );
}

export default Signup;
