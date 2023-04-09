import React from "react";

function SocialSingInForm() {
  return (
    <div>
      <div className="text-center">
        <div className="flex items-center justify-center my-6 space-x-2">
          <span className="w-16 h-px bg-gray-200"></span>
          <span className="font-normal text-gray-400">간편 로그인</span>
          <span className="w-16 h-px bg-gray-200"></span>
        </div>
        <div className="space-x-5 ">
          {/* 각 사이트 Oauth 클라이언트 필요 */}
          <div className="border-0 ">
            <button>
              <img
                src="/images/kakao-icon-48x48.png"
                alt="Kakao SignIn"
                className="rounded-lg"
              />
              Kakao
            </button>
            <div className="border-0 ">
              <button>
                <img
                  src="/images/kakao-icon-48x48.png"
                  alt="Kakao SignIn"
                  className="rounded-lg"
                />
                Kakao
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialSingInForm;
