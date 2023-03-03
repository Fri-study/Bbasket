import React from "react";
import { Link } from "react-router-dom";

function SignUpFormNar() {
  return (
    <div>
      <div className="flex text-center  rounded-t-lg bg-slate-200">
        <Link
          to="/SignIn"
          className="p-2 text-align:center rounded-t-lg w-1/2 h-10  bg-slate-200"
        >
          로그인
        </Link>
        <Link to="/SignUp" className=" p-2 rounded-t-lg w-1/2 h-10 bg-white">
          회원가입
        </Link>
      </div>
    </div>
  );
}

export default SignUpFormNar;
