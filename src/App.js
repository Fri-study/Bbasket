import { useState } from 'react';
import './App.css';
import Main from './components/Main';

function App() {

  //메인프레임 선택에 따른 메인 상태변화
  const [showState, setShowState] = useState('main');

  //로그인 => user메인페이지
  const handleLogin = () => {
    setShowState('usermain')
  }
  //로그아웃 => 메인페이지
  const handleLogout = () => {
    setShowState('main')
  }

  //ex) <frameComponent onlogin={() => {handleLogin}}>

  return (
    <div className="App">
      <header>
      </header>
      <main>
        {showState ==='main' || showState == 'usermain' ? <Main isMain={showState}/> : null}
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
