import * as S from "../styles/settings.style";

import QuestionSelect from "./Settings/QuestionSelect";
import Resource from "./Settings/Resource";
import Logs from "./Settings/Logs";


const Settings = ({hide}) => {

    return (
        <S.SettingContainer className={hide ? 'hide' : ''}>
            <QuestionSelect />
            <Resource />
            <Logs />
        </S.SettingContainer>
    )
}

export default Settings;