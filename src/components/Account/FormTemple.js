import React from "react";

function LoginTemple({ children }) {
  return (
    <div>
      <div className="relative  sm:flex sm:flex-row  justify-center bg-transparent ">
        <div className="flex-col flex self-center lg:px-14 sm:max-w-4xl xl:max-w-md  z-10">
          <div className="self-start hidden lg:flex flex-col  text-gray-300">
            <h1 className="my-3 font-semibold text-4xl">Welcome BBASKET</h1>
            <p className="pr-3 text-sm opacity-75">
              Use BBASKET to conveniently use bookmarks. Quickly see what's been
              saved with large images and tags. You can organize, search, and
              browse other people's bookmarks with tags.
            </p>
          </div>
        </div>
        <div className="flex justify-center self-center  z-10">
          <div className="w-96 relative  rounded-2xl bg-white  drop-shadow-md shadow-gray-50 m-0 m-auto mt-24 mb-8 flex flex-col ">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginTemple;
