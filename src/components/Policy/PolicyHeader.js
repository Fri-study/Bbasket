import React from "react";
import { NavLink } from "react-router-dom";

function PolicyHeader({ children }) {
  const nomalCSS = "px-4 py-2 font-semibold text-gray-800 rounded-t opacity-50";
  const activeCSS =
    "px-4 py-2 -mb-px font-semibold border-b-2 border-sky-500 rounded-t ";
  return (
    <div>
      <header className="w-full lg,xl:px-48 bg-sky-500 p-10">
        <h3 className="px-4 text-2xl text-white ">
          <strong>이용약관 및 개인정보 처리방침</strong>
        </h3>
      </header>
      <div className="inline-flex w-full px-10 pt-2">
        <NavLink
          to="/Tos"
          className={({ isActive }) => (isActive ? activeCSS : nomalCSS)}
        >
          이용약관
        </NavLink>
        <NavLink
          to="/Privacy"
          className={({ isActive }) => (isActive ? activeCSS : nomalCSS)}
        >
          개인정보 처리방침
        </NavLink>
      </div>
      <div>{children}</div>
      <body></body>
    </div>
  );
}

export default PolicyHeader;
