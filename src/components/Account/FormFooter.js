import React from "react";
import { Link } from "react-router-dom";

function LoginFooter() {
  return (
    <div>

      <div className="p-10 pb-3 rounded-b-lg text-blue-500 bg-white flex items-center justify-between">

        <Link
          to="/Tos"
          className="inline-block text-sm align-baseline hover:text-blue-900"
        >
          이용약관
        </Link>
        <Link
          to="/Privacy"
          className="inline-block text-sm hover:text-blue-900"
        >
          개인정보 처리방침
        </Link>
      </div>
    </div>
  );
}

export default LoginFooter;
