import { useEffect, useState } from "react";
import * as S from "../../styles/settings.style";

import usePost from "../../hooks/usePost";


const QuestionSelect = ({ mqlist, config, setAnswer, setMQlist }) => {
    
    const { data, error, isLoading, post } = usePost('http://cvpr.kumoh.ac.kr/rag/chatbot/api/MQ_send');
    const [selected, setSelected] = useState([1, 1, 1, 1, 1]);
    
    useEffect(() => {
        setMQlist(mqlist);
    }, [mqlist, setMQlist])

    useEffect(() => {
        setMQlist(selected.filter((item, index) => item === 1).map((item, index) => mqlist[index]));
    }, [selected, mqlist, setMQlist]);
    
    const select = (index) => {
        var temp = [...selected]
        temp[index] = temp[index] === 0 ? 1 : 0;
        setSelected(temp);
    }

    const sendQuestion = () => {
        post(config);
    }

    useEffect(() => {
        if (data) {
            console.log(data);
        }
    }, [data])

    return (
        <S.SettingsDetailContainer>
            <h3>세부 질문 선택</h3>
            <S.QuestionSelectList>
                {mqlist.map((item, index) => (
                    <li
                        className={selected[index] === 1 ? "selected" : ""}
                        onClick={()=>{select(index)}}
                    >
                        {item}
                    </li>
                ))}
            </S.QuestionSelectList>
            <S.SettingsButton>
                <button onClick={sendQuestion}>질문 전송</button>
            </S.SettingsButton>
            
        </S.SettingsDetailContainer>
    )
}

export default QuestionSelect;