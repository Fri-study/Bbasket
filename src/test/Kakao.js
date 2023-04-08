import React from "react";

function Kakao() {
  const REST_API_KEY = "98cee671aa4edfe6d97e22d2691d9f52";
  const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return <a href={KAKAO_AUTH_URL}>Kakao Login</a>;
}

export default Kakao;
