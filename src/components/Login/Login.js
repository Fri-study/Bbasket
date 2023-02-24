import React from "react";
import Navbar from "../Navbar";
import LoginFooter from "./LoginFooter";
import LoginForm from "./LoginForm";
import LoginFormNar from "./LoginFormNar";
import LoginTemple from "./LonginTemple";

function Login() {
  return (
    <div className=" bg-blue-500 absolute top-0 left-0 h-full w-full overflow-hidden">
      <Navbar />
      {/* 임시 네비게이션바 */}
      <LoginTemple>
        {/*로그인 박스 */}
        <LoginFormNar /> {/*로그인 회원가입 버튼 */}
        <LoginForm /> {/*로그인 폼 */}
        <LoginFooter /> {/*로그인 회원가입 개인정보 */}
      </LoginTemple>
    </div>
  );
}

export default Login;
