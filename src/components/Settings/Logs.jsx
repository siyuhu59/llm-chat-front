import * as S from "../../styles/settings.style";

const dummydata = {
    Retriver: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum nisl aliquet dui porttitor ultrices. Integer pellentesque ornare sodales. Donec erat quam, suscipit non nisi eget, rutrum ullamcorper felis. Mauris at dui nec sem vestibulum vehicula euismod sed purus. In at tempus eros. Quisque fermentum, enim quis egestas commodo, nunc tellus ornare velit, et eleifend enim erat sit amet nisi. Nullam vel justo felis.',
    MQRetriver: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum nisl aliquet dui porttitor ultrices. Integer pellentesque ornare sodales. Donec erat quam, suscipit non nisi eget, rutrum ullamcorper felis. Mauris at dui nec sem vestibulum vehicula euismod sed purus. In at tempus eros. Quisque fermentum, enim quis egestas commodo, nunc tellus ornare velit, et eleifend enim erat sit amet nisi. Nullam vel justo felis.',
    RerankLog: 50,
    score: 85
}

const Logs = () => {
    return (
        <S.SettingsDetailContainer style={{maxHeight: '30%'}}>
            <h3>로그</h3>
            <S.LongTextWrapper style={{maxHeight: '85%'}}>
                <p>Retriver: {dummydata.Retriver}</p>
                <p>MQRetriver: {dummydata.MQRetriver}</p>
                <p>RerankLog: {dummydata.RerankLog}</p>
                <p>score: {dummydata.score}</p>
            </S.LongTextWrapper>
            
        </S.SettingsDetailContainer>
    )
}

export default Logs;