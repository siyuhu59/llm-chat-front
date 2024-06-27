import * as S from "../styles/main.style";

const Answer = ({ answer }) => {
  return (
    // 수정 필요 << 대답 아이콘 선정후 추가 하기.
    <S.AnswerContainer>
      <div className="answer-main">{answer.text}</div>
      
    </S.AnswerContainer>
  );
}

export default Answer;