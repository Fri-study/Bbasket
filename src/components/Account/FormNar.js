import React from "react";
import { NavLink } from "react-router-dom";

function FormNar() {
  const nomalCSS =
    "p-2 text-align:center rounded-t-lg w-1/2 h-10  bg-slate-200";
  const activeCSS = " p-2 text-align:center rounded-t-lg w-1/2 h-10 bg-white";
  return (
    <div>
      <div className="flex text-center rounded-t-lg bg-slate-200">
        <NavLink
          to="/SignIn"
          className={({ isActive }) => (isActive ? activeCSS : nomalCSS)}
        >
          로그인
        </NavLink>
        <NavLink
          to="/SignUp"
          className={({ isActive }) => (isActive ? activeCSS : nomalCSS)}
        >
          회원가입
        </NavLink>
      </div>
    </div>
  );
}

export default FormNar;
