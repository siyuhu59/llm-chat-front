import * as S from "../styles/main.style";

const Message = ({ message }) => {
  return (
    <S.MessageContainer>
      <div>{message.text}</div>
    </S.MessageContainer>
  )
}

export default Message;