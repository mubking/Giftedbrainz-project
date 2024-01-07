"use client";
import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { PiPasswordBold } from "react-icons/pi";
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function Signin() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors((prev) => ({
      ...prev,
      [name]:
        name === "password" &&
        !value
          ? "Password should contain both numbers and special characters and have a length between 5 and 11 characters."
          : "",
    }));
   
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const hasErrors = Object.values(errors).some((error) => error);

    if (!formData.username) {
      setErrors((prev) => ({ ...prev, username: "This Field is Required" }));
    } else if (!formData.password) {
      setErrors((prev) => ({ ...prev, password: "This Field is Required" }));
    } else if (!hasErrors) {
      try {
        console.log("formData", formData);
        const signInData = await signIn("credentials", {
          username: formData.username,
          password: formData.password,
          redirect: false,
        });

        if (signInData.error) {
          setLoading(false);
          toast.error("Invalid Credentials, Please check your username and password", {
            position: "top-right",
            autoClose: 3000, 
          });

          console.error(signInData.error);
        } else {
          setLoading(false);
          toast.success("Login Successfull", {
            position: "top-right",
            autoClose: 1000, 
          });
          toast.success("Redirecting to Profile page", {
            position: "top-right",
            autoClose: 2000, 
          });
          router.refresh();
          router.push("/dashboard");
        }
      } catch (error) {
        setLoading(false);
        console.error("Network error:", error);
      }
    }
  };

  return (
    <div className="flex flex-col w-full justify-center items-center h-screen bg-[white] p-5 ">
      <div class="tex  relative top-10">
        <img src="/brainz.png" alt="" style={{ height: "30vh" }} />
      </div>
      <h1 className="text-3xl relative bottom-">Sign In</h1>
      <form className="flex flex-col gap-5 ">
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
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>
          {
            errors.username&&<span className="text-red-600">{errors.username}</span>
          }
        </div>
        <div className="w-full flex flex-col gap-3">
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
              value={formData.password}
              name="password"
              id="password"
              onChange={handleInputChange}
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
          {
            errors.password&&<span className="text-red-600">{errors.password}</span>
          }
        </div>
    
        <div className="sign up flex items-center gap-5">
        <button
          onClick={handleSubmit}
          className={`flex items-center py-2 px-5 rounded-2xl bg-[#5852FE] text-white w-1/2`}
        >
          <div>
              {loading && (
                <span className="loading loading-spinner loading-md">
                </span>
              )}
              <span className="">
                {loading ? "Signing In..." : "Sign In"}
              </span>
            </div>
        </button>
          <h2>or</h2>
          <button class="inline-flex mu  text-white bg-[transparent] border-0 py-3 px-10 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            <FcGoogle />
          </button>
        </div>

        <div class="link">
          Dont Have An Account?
          <a href="/signup">
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

export default Signin;
