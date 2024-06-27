import * as S from "../styles/settings.style";

import QuestionSelect from "./Settings/QuestionSelect";
import Resource from "./Settings/Resource";
import Logs from "./Settings/Logs";


const Settings = ({mqlist, setAnswer, hide, config, setMQlist}) => {

    return (
        <S.SettingContainer className={hide ? 'hide' : ''}>
            <QuestionSelect config={config} mqlist={mqlist} setAnswer={setAnswer} setMQlist={setMQlist} />
            <Resource />
            <Logs />
        </S.SettingContainer>
    )
}

export default Settings;