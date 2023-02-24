import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddBookMark from "./components/AddBookMark";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";

function App() {
  //메인프레임 선택에 따른 메인 상태변화
  const [showState, setShowState] = useState("main");
  //const [showState, setShowState] = useState('usermain');

  //로그인 => user메인페이지
  const handleLogin = () => {
    setShowState("usermain");
  };
  //로그아웃 => 메인페이지
  const handleLogout = () => {
    setShowState("main");
  };

  //ex) <frameComponent onlogin={() => {handleLogin}}>

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/AddBook" element={<AddBookMark />} />
          <Route path="/nar" element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
