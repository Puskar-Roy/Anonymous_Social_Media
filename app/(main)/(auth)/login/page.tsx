"use client";
import React, { useState } from "react";
import { login } from "@/redux/features/authSlice";
import { useSelector, useDispatch } from "react-redux";
const page = () => {
    const dispatch = useDispatch()
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login({email:userEmail,username:userName}))
    alert("Login Successfull!");
  };

  return (
    <div>
      <div className="w-[80%] mx-auto">
        <div className="flex justify-center items-center flex-col gap-6 h-screen">
          <h1 className="text-3xl font-bold">Login</h1>
          <div>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <input
                className="p-3 border-2 rounded-lg bg-slate-200 text-black"
                placeholder="Enter Name"
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <input
                className="p-3 border-2 rounded-lg bg-slate-200 text-black"
                placeholder="Enter email"
                type="text"
                value={userEmail}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="p-3 border-2 rounded-lg bg-slate-200 text-black"
                placeholder="Enter password"
                type="text"
              />
              <input
                className="bg-orange-300 p-3 rounded-lg font-semibold cursor-pointer hover:bg-orange-200"
                type="submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;