import React from "react";
import Navbar from "../../Navbar";
import FormFooter from "../FormFooter";
import SignInForm from "./SignInForm";
import SignInFormNar from "./SignInFormNar";
import FormTemple from "../FormTemple";

function Login() {
  return (
    <div className=" bg-blue-500 absolute top-0 left-0 h-full w-full overflow-hidden">
      <Navbar />
      {/* 임시 네비게이션바 */}
      <FormTemple>
        {/*로그인 박스 */}
        <SignInFormNar /> {/*로그인 회원가입 버튼 */}
        <SignInForm /> {/*로그인 폼 */}
        <FormFooter /> {/*로그인 회원가입 개인정보 */}
      </FormTemple>
    </div>
  );
}

export default Login;
