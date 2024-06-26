import { useEffect, useState } from "react";

import usePost from "../hooks/usePost";

import Message from "./Message";
import Answer from "./Answer";

import * as S from "../styles/main.style";

const Main = ({apiKey, model}) => {

  const [inputValue, setInputValue] = useState("");
  const { data, error, isLoading, post } = usePost('http://cvpr.kumoh.ac.kr/rag/chatbot/api/question_button');
  const [postBody, setPostBody] = useState({
    llm: "ollama",
    question: "",
    key: "None",
    id: "None"
  });

  const [messages, setMessages] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
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
      message: inputValue
    }])
    setInputValue("");
    post(postBody)
  }

  const parseMessage = () => {
    return messages.map((item) => {
      return (
        item.type === "q" ?
        <Message message={{text: item.message}} /> :
        <Answer answer={{text: item.message, source: item.source}} />
      )
    })
  }

  useEffect(()=>{
    setPostBody({
      ...setPostBody,
      llm: model,
      question: inputValue,
      key: apiKey
    })

  }, [inputValue, model, apiKey])

  useEffect(()=>{
    if(data) {
      console.log(data);
      setMessages([...messages, {
        type:"a",
        message: data.answer,
        source: data.source
      }])
    }
  }, [data]);



  return (
    <S.MainContainer>
      <S.ChatContainer>
        <div>{parseMessage()}</div>
        
      </S.ChatContainer>

      <S.InputContainer>
        <input placeholder="메세지를 입력해주세요" value={inputValue} onChange={handleChange} onKeyDown={handleSend}/>
        <button className={"button " + (inputValue.length > 0 ? "" : "button-disabled")} onClick={handleSend}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className="icon-2xl"><path fill="currentColor" fillRule="evenodd" d="M15.192 8.906a1.143 1.143 0 0 1 1.616 0l5.143 5.143a1.143 1.143 0 0 1-1.616 1.616l-3.192-3.192v9.813a1.143 1.143 0 0 1-2.286 0v-9.813l-3.192 3.192a1.143 1.143 0 1 1-1.616-1.616z" clipRule="evenodd"></path></svg>
        </button>
      </S.InputContainer>
    </S.MainContainer>
  );
}

export default Main;
