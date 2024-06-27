import { useState } from "react";
import * as S from "../../styles/settings.style";

const tempData = [
    "질문 1",
    "질문 2",
    "질문 3",
    "질문 4",
    "질문 5",
]


const QuestionSelect = () => {

    const [selected, setSelected] = useState([1, 1, 1, 1, 1]);
    const select = (index) => {
        var temp = [...selected]
        temp[index] = temp[index] === 0 ? 1 : 0;
        setSelected(temp);
    }

    return (
        <S.SettingsDetailContainer>
            <h3>세부 질문 선택</h3>
            <S.QuestionSelectList>
                {tempData.map((item, index) => (
                    <li
                        className={selected[index] === 1 ? "selected" : ""}
                        onClick={()=>{select(index)}}
                    >
                        {index + 1}. {item}
                    </li>
                ))}
            </S.QuestionSelectList>
            <S.SettingsButton>
                <button>질문 전송</button>
            </S.SettingsButton>
            
        </S.SettingsDetailContainer>
    )
}

export default QuestionSelect;