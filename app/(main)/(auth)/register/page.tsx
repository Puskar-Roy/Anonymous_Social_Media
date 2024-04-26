import React from "react";

const page = () => {
  return (
    <div>
      <div className="w-[80%] mx-auto">
        <div className="flex justify-center items-center flex-col gap-6 h-screen">
          <h1 className="text-3xl font-bold">Register</h1>
          <div>
            <form className="flex flex-col gap-3">
              <input
                className="p-3 border-2 rounded-lg bg-slate-200 text-black"
                placeholder="Enter Name"
                type="text"
              />
              <input
                className="p-3 border-2 rounded-lg bg-slate-200 text-black"
                placeholder="Enter email"
                type="text"
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
