import React from "react";
import { Link } from "react-router-dom";

// 임시적으로 어떤 방식으로 돌아는지 보이기위해 만들었습니다
//  추후 다듬겠습니다
function Navbar() {
  return (
    <div>
      <nav id="header">
        <div className="z-30 flex items-center justify-between w-full px-6 py-2 mt-0 bg-white border-b border-blue-400 top-10">
          <label
            htmlFor="menu-toggle"
            className="block cursor-pointer md:hidden"
          >
            <svg
              className="text-blue-600 fill-current"
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
            className="order-3 hidden w-full md:flex md:items-center md:w-auto md:order-1"
            id="menu"
          >
            <nav>
              <ul className="items-center justify-between pt-4 text-base text-blue-600 md:flex md:pt-0">
                <li>
                  <Link
                    to="/"
                    className="inline-block px-4 py-2 text-lg font-medium no-underline hover:text-black lg:-ml-2"
                  >
                    Home
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div
            className="flex flex-wrap items-center justify-end order-2 mr-0 md:order-3 md:mr-4"
            id="nav-content"
          >
            <div className="flex items-center w-full auth md:w-full">
              <Link to={"/AddBook"}>
                <button className="p-2 mr-4 text-gray-800 bg-transparent border border-gray-300 rounded hover:bg-gray-100 hover:text-gray-700">
                  {/* 임시 기능  후에 로그인 시에 보이게 하기*/}
                  글쓰기
                </button>
              </Link>
              <Link to="/SignIn">
                <button className="p-2 text-gray-200 bg-blue-500 rounded hover:bg-blue-700 hover:text-gray-100">
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
