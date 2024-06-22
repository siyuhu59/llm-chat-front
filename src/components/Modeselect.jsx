import { useState } from "react";

import * as S from "../styles/modeSelect.style";

const ModeSelect = ({model, setModel, apikey, setKey}) => {

  const [hide, setHide] = useState(false);
  // const [model, setModel] = useState("ollama");

  const handleHide = () => {
    setHide(!hide);
  }

  const handleModelChange = (e) => {
    setModel(e.target.value);
  }

  const handleKey = (e) => {
    setKey(e.target.value);
  }

  return (
    <S.ModeSelectContainer>
      <S.SelectContainer>
        <S.Label>Select Model</S.Label>
        <S.SelectModel value={model} onChange={handleModelChange}>
          <option value="ollama">Ollama</option>
          <option value="gpt4o">GPT-4o</option>
        </S.SelectModel>
      </S.SelectContainer>

      <S.InputAPIKeyContainer>
        <S.Label>OpenAI API Key</S.Label>
        <div>
          <S.InputAPIKey type={hide ? "password" : "text"} disabled={model === "gpt4o" ? false : true} value={apikey} onChange={handleKey}/>
          <S.HideButton onClick={handleHide}>{hide ? "Show" : "Hide"}</S.HideButton>
        </div>
      </S.InputAPIKeyContainer>
    </S.ModeSelectContainer>
  );
};

export default ModeSelect;