import React from "react";
import { Link } from "react-router-dom";

// 임시적으로 어떤 방식으로 돌아는지 보이기위해 만들었습니다
//  추후 다듬겠습니다
function Navbar() {
  return (
    <div>
      <nav id="header">
        <div className="w-full flex items-center justify-between mt-0 px-6 py-2 w-full z-30 top-10 py-1 bg-white border-b border-blue-400 mt-24">
          <label
            htmlFor="menu-toggle"
            className="cursor-pointer md:hidden block"
          >
            <svg
              className="fill-current text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>

          <div
            className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
            id="menu"
          >
            <nav>
              <ul className="md:flex items-center justify-between text-base text-blue-600 pt-4 md:pt-0">
                <li>
                  <Link
                    to="/"
                    className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2"
                  >
                    Home
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div
            className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4"
            id="nav-content"
          >
            <div className="auth flex items-center w-full md:w-full">
              <Link to={"/AddBook"}>
                <button className="bg-transparent text-gray-800  p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700">
                  {/* 임시 기능  후에 로그인 시에 보이게 하기*/}
                  글쓰기
                </button>
              </Link>
              <Link to="/Login">
                <button className="bg-blue-500 text-gray-200  p-2 rounded  hover:bg-blue-700 hover:text-gray-100">
                  로그인
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
