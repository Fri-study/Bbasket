import React from "react";
import Main from "../Main";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

function Home() {
  return (
    <div>
      {/* 완전히 합치기전이라 임시적으로 만들었습니다. */}
      <Navbar />
      <Main />
    </div>
  );
}

export default Home;
