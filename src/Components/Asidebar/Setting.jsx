"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import { toast, ToastContainer } from "react-toastify";

function Setting() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setformData] = useState({
    username: "",
    email: "",
  });
  const [edit, setEdit] = useState({
    username: false,
    email: false,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let input = document.querySelector("input");

    input.addEventListener("change", () => {
      const file = input.files[0];
      if (file) {
        setSelectedImage(URL.createObjectURL(file));
      }
    });
  }, []);

  const getUserInfo = async () => {
    try {
      const resp = await fetch("/api/profile");
      const result = await resp.json();
      console.log(result);
      const { data } = result;
      if (resp.ok) {
        setformData({
          ...formData,
          username: data?.username,
          email: data?.email,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setformData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdateProfile = async () => {
    setLoading(true);
    try {
      const resp = await fetch("/api/profile", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await resp.json();
      console.log(result);
      const { message } = result;
      if (resp.ok) {
        toast.success(message,{
          position: "top-right",
          autoClose: 3000, 
        });
        setLoading(false);
        signOut({
          redirect: true,
          callbackUrl: `${window.location.origin}/signin`,
        })
      }
      else{
        toast.error(message,{
          position: "top-right",
          autoClose: 3000, 
        });
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error("Internal server error",{
        position: "top-right",
        autoClose: 3000, 
      });
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className="p-5 w-full min-h-screen ">
      <div className="text-black font-semibold capitalize text-3xl">
        settings
      </div>
      <div className="text-black text-opacity-50 mt-5 text-xl font-semibold capitalize">
        manage all your settings in here.
      </div>

      <img
        src={selectedImage || "placeholder-image-url.jpg"}
        alt=""
        className="h-[150px] w-[150px] rounded-full object-cover mt-10 bg-[#ddd]"
      />
      <input type="file" id="file" name="file" className="mt-10" />

      <div className=" mt-2 flex flex-col gap-3 ">
        <label htmlFor="username">Username</label>
        <div className="flex items-center gap-5">
          <input
            type="text"
            disabled={!edit.username}
            value={formData.username}
            name="username"
            id="username"
            onChange={handleInputChange}
            className="w-[50%] h-[8vh] px-4 disabled:border-none border border-[#5852FE] disabled:cursor-not-allowed bg-zinc-300 bg-opacity-40  text-blue-600  rounded-[100px]"
          />

          <p>
            {" "}
            <button
              onClick={() => setEdit({ ...edit, username: !edit.username })}
              className="text-[#5852FE]"
            >
              Edit
            </button>
          </p>
        </div>
      </div>
      <div className=" mt-2 flex flex-col gap-3 ">
        <label htmlFor="username">Your Email</label>
        <div className="flex items-center gap-5">
          <input
            type="text"
            disabled={!edit.email}
            value={formData.email}
            name="email"
            id="email"
            onChange={handleInputChange}
            className="w-[50%] h-[8vh] px-4 disabled:border-none border border-[#5852FE]  disabled:cursor-not-allowed bg-zinc-300 bg-opacity-40 rounded-[100px]  text-blue-600  focus:border-green-500 "
          />
          <p>
            {" "}
            <button
              onClick={() => setEdit({ ...edit, email: !edit.email })}
              className="text-[#5852FE]"
            >
              Edit
            </button>
          </p>
        </div>
      </div>
      <div className="btn flex justify-between mt-10">
        <button
          onClick={handleUpdateProfile}
          class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          {loading ? "saving" : "Save"}
        </button>
        <button
          onClick={() =>
            signOut({
              redirect: true,
              callbackUrl: `${window.location.origin}/signin`,
            })
          }
          class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Log Out
        </button>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default Setting;
