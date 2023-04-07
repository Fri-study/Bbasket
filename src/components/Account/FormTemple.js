import React from "react";

function LoginTemple({ children }) {
  return (
    <div>
      <div className="justify-center bg-transparent  sm:flex sm:flex-row">
        <div className="z-10 flex flex-col self-center lg:px-14 sm:max-w-4xl xl:max-w-md">
          <div className="flex-col self-start hidden text-gray-300 lg:flex">
            <h1 className="my-3 text-4xl font-semibold">Welcome BBASKET</h1>
            <p className="pr-3 text-sm opacity-75">
              Use BBASKET to conveniently use bookmarks. Quickly see what's been
              saved with large images and tags. You can organize, search, and
              browse other people's bookmarks with tags.
            </p>
          </div>
        </div>
        <div className="z-10 flex self-center justify-center">
          <div className="relative flex flex-col m-auto mt-24 mb-8 bg-white w-96 rounded-2xl drop-shadow-md shadow-gray-50 ">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginTemple;
