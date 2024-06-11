import { useState } from "react";

import Message from "./Message";
import Answer from "./Answer";

import * as S from "../styles/main.style";

const Main = () => {

  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <S.MainContainer>
      <S.ChatContainer>
        <div>
          <Message message={{ text: "안녕하세요" }} />
          <Answer answer={{ text: "\"안녕하세요\"는 대한민국에서 사용되는 흔한 인삿말입니다.", source: "네이버" }} />
          <Message message={{ text: "안녕하세요" }} />
          <Answer answer={{ text: "\"안녕하세요\"는 대한민국에서 사용되는 흔한 인삿말입니다.", source: "네이버" }} />
          <Message message={{ text: "안녕하세요" }} />
          <Answer answer={{ text: "\"안녕하세요\"는 대한민국에서 사용되는 흔한 인삿말입니다.", source: "네이버" }} />
          <Message message={{ text: "안녕하세요" }} />
          <Answer answer={{ text: "\"안녕하세요\"는 대한민국에서 사용되는 흔한 인삿말입니다.", source: "네이버" }} />
          <Message message={{ text: "안녕하세요" }} />
          <Answer answer={{ text: "\"안녕하세요\"는 대한민국에서 사용되는 흔한 인삿말입니다.", source: "네이버" }} />
          <Message message={{ text: "안녕하세요" }} />
          <Answer answer={{ text: "\"안녕하세요\"는 대한민국에서 사용되는 흔한 인삿말입니다.", source: "네이버" }} />
          <Message message={{ text: "안녕하세요" }} />
          <Answer answer={{ text: "\"안녕하세요\"는 대한민국에서 사용되는 흔한 인삿말입니다.", source: "네이버" }} />
          <Message message={{ text: "안녕하세요" }} />
          <Answer answer={{ text: "\"안녕하세요\"는 대한민국에서 사용되는 흔한 인삿말입니다.", source: "네이버" }} />
          
        </div>
        
      </S.ChatContainer>

      <S.InputContainer>
        <textarea placeholder="메세지를 입력해주세요" value={inputValue} onChange={handleChange}/>
        <button className={"button " + (inputValue.length > 0 ? "" : "button-disabled")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className="icon-2xl"><path fill="currentColor" fillRule="evenodd" d="M15.192 8.906a1.143 1.143 0 0 1 1.616 0l5.143 5.143a1.143 1.143 0 0 1-1.616 1.616l-3.192-3.192v9.813a1.143 1.143 0 0 1-2.286 0v-9.813l-3.192 3.192a1.143 1.143 0 1 1-1.616-1.616z" clipRule="evenodd"></path></svg>
        </button>
      </S.InputContainer>
    </S.MainContainer>
  );
}

export default Main;