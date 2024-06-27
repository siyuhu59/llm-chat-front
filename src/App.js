import { useEffect, useState } from "react";

import * as S from "./styles/app.style";

import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Settings from "./components/Settings";

const App = () => {

  useEffect(()=>{

    const setCookie = (value) => {
      document.cookie = `user_id=${value}; path=/;`;
    }
    fetch('http://cvpr.kumoh.ac.kr/rag/chatbot/api/', {
      method: 'GET',
      credentials: 'include' // 쿠키 포함
      
    })
    .then(res => res.json())
    .then(data => console.log(data.user_id))
  }, [])

  const [hide, setHide] = useState(false);

  // 첫번째 질문 설정
  const [firstConfig, setFirstConfig] = useState({
    llm: "ollama",
    key: "",
    question: ""
  });
  const setConfigSidebar = {
    setModel: (model) => {
      setFirstConfig({
        ...firstConfig,
        llm: model
      });
    },
    setKey: (key) => {
      setFirstConfig({
        ...firstConfig,
        key: key
      });
    }
  }
  const setQuestion = (message) => {
    setFirstConfig({
      ...firstConfig,
      question: message
    });
  }
  // 첫번째 질문 답변: 멀티쿼리 배열
  const [firstAnswer, setFirstAnswer] = useState([1, 1, 1, 1, 1]);


  const onToggle = () => {
    setHide(!hide);
  }

  return (
    <S.AppContainer>
      <Sidebar config={firstConfig} setConfig={setConfigSidebar}/>
      <Main config={firstConfig} setQuestion={setQuestion} setFirstAnswer={setFirstAnswer} hide={hide}/>
      <Settings mqlist={firstAnswer} hide={hide}/>
      <S.SidebarToggleButton className={hide ? 'hide' : ''} onClick={onToggle}><span></span></S.SidebarToggleButton>
    </S.AppContainer>
  );
}

export default App;
