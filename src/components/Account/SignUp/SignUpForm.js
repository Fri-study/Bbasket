import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function LoginForm() {
  const [inputNickname, setInputNickname] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [inputConfirmPw, setInputConfirmPw] = useState("");

  const [nicknameValid, setNicknameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [confirmPwValid, setConfirmPwValid] = useState(false);
  const [checkBoxActive, setCheckboxActive] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  useEffect(() => {
    if (
      nicknameValid &&
      emailValid &&
      pwValid &&
      confirmPwValid &&
      checkBoxActive
    ) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [nicknameValid, emailValid, pwValid, confirmPwValid, checkBoxActive]);

  const handleInputNickname = (e) => {
    setInputNickname(e.target.value);
    //  임시 유효성 검사 - 추후 정한 로직이 있다면 알려주세요
    const nicknameRegex =
      /^(?=.*[a-zA-z])(?=.*[ㄱ-ㅎ|ㅏ-ㅣ|가-힣])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (nicknameRegex.test(e.target.value)) {
      setNicknameValid(true);
    } else {
      setNicknameValid(false);
    }
  };

  // input data의 변화가 있을 때마다 value 값을 변경해서 useState
  const handleInputEmail = (e) => {
    setInputEmail(e.target.value);
    // 임시 유효성 검사 - 추후 정한 로직이 있다면 알려주세요
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (emailRegex.test(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
    // 임시 유효성 검사 - 추후 정한 로직이 있다면 알려주세요
    const pwRegex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (pwRegex.test(e.target.value)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  const handleInputConfirmPw = (e) => {
    setInputConfirmPw(e.target.value);
    // 임시 유효성 검사 - 추후 정한 로직이 있다면 알려주세요
    const cpnfirmPwRegex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (cpnfirmPwRegex.test(e.target.value)) {
      setConfirmPwValid(true);
    } else {
      setConfirmPwValid(false);
    }
  };

  const isCheckBoxClicked = (e) => {
    setCheckboxActive(e.target.value);
    if (!checkBoxActive) {
      setCheckboxActive(true);
    } else {
      setCheckboxActive(false);
    }
  };

  // Login 버튼 클릭 이벤트
  const onClickSignUp = () => {
    if (
      inputNickname &&
      inputEmail &&
      inputPw &&
      inputConfirmPw &&
      checkBoxActive === true
    ) {
      alert("회원가입에 성공했습니다.");
    } else {
      alert("이미 등록된 회원입니다.  ");
    }
  };

  // 페이지 렌더링 후 가장 처음 호출되는 함수
  useEffect(
    () => {
      //axios.get('/user_inform/login')
      //    .then(res => console.log(res))
      //    .catch()
    },
    // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
    []
  );
  return (
    <div>
      <div className="p-10 pb-2 bg-white">
        {/* 닉네임 입력 */}
        <div>
          <div className="w-full pb-1 text-left rounded-lg"> 이름</div>
          <input
            placeholder="이름을 입력하세요"
            id="id"
            value={inputNickname}
            onChange={handleInputNickname}
            className="w-full px-4 py-1 border-4 rounded-lg"
          />
        </div>
        {/* 이메일 입력 */}
        <div>
          <div className="w-full pb-1 text-left rounded-lg"> 이메일</div>
          <input
            placeholder="이메일를 입력하세요"
            id="id"
            value={inputEmail}
            onChange={handleInputEmail}
            className="w-full px-4 py-1 border-4 rounded-lg"
          />
          <div className="text-xs text-red-500 ">
            {!emailValid && inputEmail.length > 0 && (
              <div>올바른 이메일을 입력해주세요.</div>
            )}
          </div>
        </div>
        {/* 비밀번호 입력 */}
        <div>
          <div className="w-full pt-4 pb-1 text-left rounded-lg">비밀번호</div>
          <input
            placeholder="비밀번호를 입력하세요"
            id="password"
            value={inputPw}
            onChange={handleInputPw}
            className="w-full px-4 py-1 border-4 rounded-lg"
          />
          <div className="text-xs text-red-500 ">
            {!pwValid && inputPw.length > 0 && (
              <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
            )}
          </div>
        </div>
        {/* 비밀번호 재입력 */}
        <div className="pt-2">
          <input
            placeholder="비밀번호를 확인해 주세요"
            id="password"
            value={inputConfirmPw}
            onChange={handleInputConfirmPw}
            className="w-full px-4 py-1 border-4 rounded-lg"
          />
          <div className="text-xs text-red-500 ">
            {inputPw !== inputConfirmPw && (
              <div>비밀번호와 비밀번호 확인이 같지 않습니다.</div>
            )}
          </div>
        </div>
        {/* 회원가입 체크박스 */}
        <div className="pt-4 text-center ">
          <div className="text-xs text-gray-500 ">
            가입 시, 통합 계정으로 비바스켓이 제공하는 서비스를 모두 이용하실 수
            있습니다.
            <NavLink to="/Tos" className="text-blue-500 hover:text-blue-700">
              서비스 이용약관
            </NavLink>
            ,&nbsp;
            <NavLink
              to="/Privacy"
              className="text-blue-500 hover:text-blue-700"
            >
              개인정보처리방침
            </NavLink>
            에 동의합니다.
          </div>
          <input
            type="checkbox"
            value={checkBoxActive}
            onChange={isCheckBoxClicked}
          />
          <label>모두 동의 합니다.</label>
        </div>
        {/* 회원가입 버튼 */}
        <button
          type="button"
          className="w-full px-4 py-2 text-white bg-blue-500 border-0 rounded-lg hover:bg-blue-700"
          value={notAllow}
          onClick={onClickSignUp}
          disabled={notAllow}
        >
          회원가입
        </button>
        <div className=" text-center">
          <div className="flex items-center justify-center space-x-2 my-6">
            <span className="h-px w-16 bg-gray-200"></span>
            <span className="text-gray-400 font-normal">간편 회원가입</span>
            <span className="h-px w-16 bg-gray-200"></span>
          </div>
          <div className="space-x-6">
            {/* 각 사이트 Oauth 클라이언트 필요 */}
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
    </div>
  );
}

export default LoginForm;
