import React from "react";
import { Link } from "react-router-dom";

function LoginFooter() {
  return (
    <div>
      <div className="p-10 pb-3 rounded-b-lg text-blue-500 bg-white flex items-center justify-between">
        <Link
          to="#"
          className="inline-block hover:text-blue-900 align-baseline  text-sm"
        >
          이용약관
        </Link>
        <Link to="#" className="inline-block hover:text-blue-900  text-sm">
          개인정보 처리방침
        </Link>
      </div>
    </div>
  );
}

export default LoginFooter;
