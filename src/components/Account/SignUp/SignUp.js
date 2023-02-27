import React from "react";
import Navbar from "../../Navbar";
import FormFooter from "../FormFooter";
import SignUp from "./SignUpForm";
import SignUpFormNar from "./SignUpFormNar";
import FormTemple from "../FormTemple";

function Login() {
  return (
    <div className=" bg-blue-500 absolute top-0 left-0 h-full w-full overflow-hidden">
      <Navbar />
      {/* 임시 네비게이션바 */}
      <FormTemple>
        {/*회원가입 박스 */}
        <SignUpFormNar /> {/*로그인 회원가입 버튼 */}
        <SignUp /> {/*회원가입 폼 */}
        <FormFooter /> {/*로그인 회원가입 개인정보 */}
      </FormTemple>
    </div>
  );
}

export default Login;
