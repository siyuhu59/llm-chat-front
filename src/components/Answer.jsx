import { useState } from "react";

import * as S from "../styles/main.style";

const Answer = ({ answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleDragStart = (e) => {
    e.preventDefault();
  };

  return (


    // 수정 필요 << 대답 아이콘 선정후 추가 하기.
    <S.AnswerContainer>
      <div className="answer-main">{answer.text}</div>

      {/* 수정 필요 << 아이콘으로 변경하고 버튼 효과 넣기 */}
      <div className="answer-menu" onClick={handleClick} onDragStart={handleDragStart}>
        <div className={"arrow " + (isOpen ? "open" : "")} >▼</div>
        <div>출처</div>
      </div>
      
      {isOpen ? <div className="answer-source">{answer.source}</div> : null}
      
    </S.AnswerContainer>
  );
}

export default Answer;