import React from "react";
import Footer from "../Footer";
import Main from "../Main";
import Navbar from "../Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
