import React from "react";
import Navbar from "../../Navbar";
import FormFooter from "../FormFooter";
import SignInForm from "./SignInForm";
import FormTemple from "../FormTemple";
import FormNar from "../FormNar";

function Login() {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden bg-blue-500 ">
      <Navbar />
      {/* 임시 네비게이션바 */}
      <FormTemple>
        {/*로그인 박스 */}
        <FormNar /> {/*로그인 회원가입 버튼 */}
        <SignInForm /> {/*로그인 폼 */}
        <FormFooter /> {/*로그인 회원가입 개인정보 */}
      </FormTemple>
    </div>
  );
}

export default Login;
