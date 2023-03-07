import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import TosContent from "../Policy/Tos/TosContent";
import PolicyHeader from "../Policy/PolicyHeader";

function Tos() {
  return (
    <div>
      <Navbar />
      <PolicyHeader />
      <TosContent />
      <Footer />
    </div>
  );
}

export default Tos;
