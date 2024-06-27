import { useState } from "react";

import * as S from "../styles/modeSelect.style";

const ModeSelect = ({config, setConfig}) => {

  const [hide, setHide] = useState(false);
  // const [model, setModel] = useState("ollama");

  const handleHide = () => {
    setHide(!hide);
  }

  const handleModelChange = (e) => {
    setConfig.setModel(e.target.value);
  }

  const handleKey = (e) => {
    setConfig.setKey(e.target.value);
  }

  return (
    <S.ModeSelectContainer>
      <S.SelectContainer>
        <S.Label>모델 선택</S.Label>
        <S.SelectModel value={config.llm} onChange={handleModelChange}>
          <option value="ollama">Ollama</option>
          <option value="gpt4o">GPT-4o</option>
        </S.SelectModel>
      </S.SelectContainer>

      <S.InputAPIKeyContainer>
        <S.Label>OpenAI API Key 입력</S.Label>
        <div>
          <S.InputAPIKey type={hide ? "password" : "text"} disabled={config.llm === "gpt4o" ? false : true} value={config.key} onChange={handleKey}/>
          <S.HideButton onClick={handleHide}>{hide ? "Show" : "Hide"}</S.HideButton>
        </div>
      </S.InputAPIKeyContainer>
    </S.ModeSelectContainer>
  );
};

export default ModeSelect;