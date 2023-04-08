import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function LoginForm() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [userNameValid, setUserNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [password2Valid, setPassword2Valid] = useState(false);
  const [checkBoxActive, setCheckboxActive] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  useEffect(() => {
    if (
      userNameValid &&
      emailValid &&
      passwordValid &&
      password2Valid &&
      checkBoxActive
    ) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [
    userNameValid,
    emailValid,
    passwordValid,
    password2Valid,
    checkBoxActive,
  ]);

  const handleUserName = (e) => {
    setUserName(e.target.value);
    //  임시 유효성 검사 - 추후 정한 로직이 있다면 알려주세요
    const nicknameRegex =
      /^(?=.*[a-zA-z])(?=.*[ㄱ-ㅎ|ㅏ-ㅣ|가-힣])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (nicknameRegex.test(e.target.value)) {
      setUserNameValid(true);
    } else {
      setUserNameValid(false);
    }
  };

  // input data의 변화가 있을 때마다 value 값을 변경해서 useState
  const handleEmail = (e) => {
    setEmail(e.target.value);
    // 임시 유효성 검사 - 추후 정한 로직이 있다면 알려주세요
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (emailRegex.test(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    // 임시 유효성 검사 - 추후 정한 로직이 있다면 알려주세요
    const pwRegex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (pwRegex.test(e.target.value)) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  };

  const handlePassword2 = (e) => {
    setPassword2(e.target.value);
    // 임시 유효성 검사 - 추후 정한 로직이 있다면 알려주세요
    const cpnfirmPwRegex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (cpnfirmPwRegex.test(e.target.value)) {
      setPassword2Valid(true);
    } else {
      setPassword2Valid(false);
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
    if (userName && email && password && password2 && checkBoxActive === true) {
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
            value={userName}
            onChange={handleUserName}
            className="w-full px-4 py-1 border-4 rounded-lg"
          />
        </div>
        {/* 이메일 입력 */}
        <div>
          <div className="w-full pb-1 text-left rounded-lg"> 이메일</div>
          <input
            placeholder="이메일를 입력하세요"
            id="id"
            value={email}
            onChange={handleEmail}
            className="w-full px-4 py-1 border-4 rounded-lg"
          />
          <div className="text-xs text-red-500 ">
            {!emailValid && email.length > 0 && (
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
            value={password}
            onChange={handlePassword}
            className="w-full px-4 py-1 border-4 rounded-lg"
          />
          <div className="text-xs text-red-500 ">
            {!passwordValid && password.length > 0 && (
              <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
            )}
          </div>
        </div>
        {/* 비밀번호 재입력 */}
        <div className="pt-2">
          <input
            placeholder="비밀번호를 확인해 주세요"
            id="password"
            value={password2}
            onChange={handlePassword2}
            className="w-full px-4 py-1 border-4 rounded-lg"
          />
          <div className="text-xs text-red-500 ">
            {password !== password2 && (
              <div>비밀번호와 비밀번호 확인이 같지 않습니다.</div>
            )}
          </div>
        </div>
        {/* 회원가입 체크박스 */}
        <div className="pt-4 text-center ">
          <div className="text-[10px] text-gray-500 ">
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
            className="text-xs"
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
      </div>
    </div>
  );
}

export default LoginForm;
