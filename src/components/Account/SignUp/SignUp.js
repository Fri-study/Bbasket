import React from "react";
import Navbar from "../../Navbar";
import FormFooter from "../FormFooter";
import SignUp from "./SignUpForm";
import FormTemple from "../FormTemple";
import FormNar from "../FormNar";
import SocialSingInForm from "../SocialSingIn/SocialSingInForm";

function Login() {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden bg-blue-500 ">
      <Navbar />
      {/* 임시 네비게이션바 */}
      <FormTemple>
        {/*회원가입 박스 */}
        <FormNar /> {/*로그인 회원가입 버튼 */}
        <SignUp /> {/*회원가입 폼 */}
        <SocialSingInForm /> {/* 간편 로그인 폼 */}
        <FormFooter /> {/*로그인 회원가입 개인정보 */}
      </FormTemple>
    </div>
  );
}

export default Login;
