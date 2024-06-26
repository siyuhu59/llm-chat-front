import * as S from "../styles/loading.style";

import { AnswerContainer } from "../styles/main.style";


const Loading = () => {
    return (
    <AnswerContainer>
        <S.LoadingBubble >
        <S.Spinner>
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
        </S.Spinner>
        </S.LoadingBubble>
    </AnswerContainer>
    )

}

export default Loading;