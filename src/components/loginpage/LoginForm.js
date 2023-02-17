import React from "react";

function LoginForm() {
  return (
    <div className="bg-blue-500 p-8 justify-center">
      <div className="rounded-b-lg w-80 p-8 bg-white">
        <div>
          <div className="rounded-lg w-64 text-left pb-2"> 이메일</div>
          <input
            placeholder="이메일를 입력하세요"
            id="id"
            className="rounded-lg border-4 w-64"
          />
        </div>
        <div className="pb-6">
          <div className="rounded-lg w-64 text-left pb-2 pt-6"> 비밀번호</div>
          <input
            placeholder="아이디를 입력하세요"
            id="password"
            className="rounded-lg border-4 w-64"
          />
        </div>
        <button
          type="button"
          className="rounded-lg border-0 w-64 bg-blue-500 hover:bg-blue-700 text-white"
        >
          로그인
        </button>
        <div className="pt-8">
          <div>간편 로그인</div>
          <br />
          <div className="space-x-4">
            <button>
              <img
                src="/images/google-icon-48x48.png"
                alt=""
                className="rounded-lg"
              />
              <div>Google</div>
            </button>
            <button>
              <img
                src="/images/kakao-icon-48x48.png"
                alt=""
                className="rounded-lg"
              />
              <div>KaKao</div>
            </button>
          </div>
        </div>
      </div>
      <div className="pt-1 flex flex-row space-x-4 text-white">
        <a href="#">이용약관</a>
        <a href="#">개인정보 처리방침</a>
      </div>
    </div>
  );
}

export default LoginForm;
