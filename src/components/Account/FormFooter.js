import React from "react";
import { Link } from "react-router-dom";

function LoginFooter() {
  return (
    <div>
      <div className="flex items-center justify-between p-10 pb-3 text-blue-500 bg-white rounded-b-lg">
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
