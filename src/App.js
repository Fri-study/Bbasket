import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddBookMark from "./components/AddBookMark";
import SignIn from "./components/Account/SignIn/SignIn";
import SignUp from "./components/Account/SignUp/SignUp";
import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";
import Tos from "./components/Pages/Tos";
// import Auth from "./test/Auth";
// import Profile from "./test/Profile";
// import Kakao from "./test/kakao";
// import GoogleButton from "./components/Account/SocialSingIn/GoogleButton";
// import SocialSingInForm from "./components/Account/SocialSingIn/SocialSingInForm";
import Privacy from "./components/Pages/Privacy";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          {/* <Route path="/oauth/kakao/callback" element={<Authcheck />} /> */}
          {/* <Route path="/profile" element={<Pro />} /> */}
          <Route path="/Tos" element={<Tos />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/AddBook" element={<AddBookMark />} />
          <Route path="/nar" element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
