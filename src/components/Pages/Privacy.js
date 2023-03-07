import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import PolicyHeader from "../Policy/PolicyHeader";
import PrivacyContent from "../Policy/Privacy/PrivacyContent";

function Privacy() {
  return (
    <div>
      <Navbar />
      <PolicyHeader />
      <PrivacyContent />
      <Footer />
    </div>
  );
}

export default Privacy;
