import * as S from "../../styles/settings.style";

const Logs = ({logs}) => {
    return (
        <S.SettingsDetailContainer style={{maxHeight: '30%'}}>
            <h3>로그</h3>
            <S.LongTextWrapper style={{maxHeight: '85%'}}>
                <p>Retriver: {logs.RetriverLog}</p>
                <p>MQRetriver: {logs.MQRetriverLog}</p>
                <p>RerankLog: {logs.RerankLog}</p>
                <p>score: {logs.score[0]}</p>
            </S.LongTextWrapper>
            
        </S.SettingsDetailContainer>
    )
}

export default Logs;