import { useEffect, useState } from "react";

import usePost from "../hooks/usePost";

import Message from "./Message";
import Answer from "./Answer";
import Loading from "./Loading";

import del from "../assets/images/delete.png";
import logo from "../assets/images/logo192.png"

import * as S from "../styles/main.style";

const Main = ({config, setQuestion, setFirstAnswer, hide, answer, secondLoading}) => {

  const { data, error, isLoading, post } = usePost('http://cvpr.kumoh.ac.kr/rag2/chatbot/api/question_button');

  const [messages, setMessages] = useState([]);

  const handleChange = (e) => {
    setQuestion(e.target.value);
  }

  const handleSend = (e) => {
    const condition = (
      (e.type === "click" && (e.target.tagName === "svg" || e.target.tagName === "path")) ||
      (e.type === "keydown" && e.key === "Enter")
    )

    if (condition && !isLoading) {
      console.log("send message");
      sendQuestion();
    }
  }

  const sendQuestion = () => {
    setMessages([...messages, {
      type: "q",
      message: config.question
    }])
    setQuestion("")

    // for test. finish test you must remove that
    // setload(true)
    console.log(config)
    post(config)
  }

  const parseMessage = () => {
    return messages.map((item) => {
      return (
        item.type === "q" ?
        <Message message={{text: item.message}} /> :
        <Answer answer={{text: item.message}} />
      )
    })
  }

  useEffect(()=>{
    if(data) {
      console.log(data);
      setFirstAnswer(data);
    }
  }, [data]);

  useEffect(() => {
    if(answer.answer !== "") {
      setMessages([...messages, {
        type: "a",
        message: answer.answer
      }])
    }
  }, [answer])

  const clearChat = () => {
    setMessages([]);
  }

  return (
    <S.MainContainer style={hide ? { width: '85%' } : {}}>
      <S.ChatContainer>
        {messages.length === 0 ? 
          <S.TitleWrapper>
            <div>
              <img src={logo} alt='logo'/>
            </div>
            <h1>Chatbot</h1>
          </S.TitleWrapper>
          : null
        }

        <div>
          {parseMessage()}
          {isLoading || secondLoading ? <Loading /> : null}
        </div>
        
      </S.ChatContainer>

      <S.InputContainer>
        <input placeholder="메세지를 입력해주세요" value={config.question} onChange={handleChange} onKeyDown={handleSend}/>
        <button className={"button " + (config.question.length > 0 ? "" : "button-disabled")} onClick={handleSend}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className="icon-2xl"><path fill="currentColor" fillRule="evenodd" d="M15.192 8.906a1.143 1.143 0 0 1 1.616 0l5.143 5.143a1.143 1.143 0 0 1-1.616 1.616l-3.192-3.192v9.813a1.143 1.143 0 0 1-2.286 0v-9.813l-3.192 3.192a1.143 1.143 0 1 1-1.616-1.616z" clipRule="evenodd"></path></svg>
        </button>
      </S.InputContainer>

      <S.ClearButton onClick={clearChat}>
        <img src={del} alt="delete" />
      </S.ClearButton>
    </S.MainContainer>
  );
}

export default Main;
