import { useEffect, useState } from "react";
import * as S from "../../styles/settings.style";

import usePost from "../../hooks/usePost";


const QuestionSelect = ({ mqlist, config, setAnswer, setMQlist, setLoading }) => {
    
    const { data, error, isLoading, post } = usePost('http://cvpr.kumoh.ac.kr/rag2/chatbot/api/MQ_send');
    const [selected, setSelected] = useState([1, 1, 1, 1, 1]);
    
    useEffect(() => {
        setMQlist(mqlist);
    }, [])

    useEffect(() => {
        setMQlist(selected.map((item, index) => item === 1 ? mqlist[index] : 'null'));
    }, [selected]);
    
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
            setAnswer(data);
        }
    }, [data])

    useEffect(() => {
        setLoading(isLoading)
    }, [isLoading])

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