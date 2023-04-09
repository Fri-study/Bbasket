import React from "react";
import GoogleLogin from "react-google-login";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const clientId = "클라이언트ID";

export function Google({ onGoogleLogin }) {
  const navigate = useNavigate();
  const onSuccess = async (response) => {
    const token = response.tokenObj.access_token;
    console.log(token);

    let body = {
      token: token,
      registrationId: "Google",
    };

    axios
      .post("/api/token", body) //토큰, 추가 정보 전송
      .then((res) => {
        if (res.data.success) {
          console.log(res.data);
          navigate("/extrainfo2");
        }
      })
      .catch((err) => console.log(err));
  };

  const onFailure = (error) => {
    console.log(error);
  };

  return (
    <GoogleLogin
      clientId={clientId}
      responseType={"id_token"}
      onSuccess={onSuccess}
      onFailure={onFailure}
      button="Google"
    />
  );
}

export default Google;
