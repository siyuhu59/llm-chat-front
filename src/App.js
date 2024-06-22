import { useState } from "react";

import * as S from "./styles/app.style";

import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

const App = () => {
  const [model, setModel] = useState("ollama");
  const [key, setKey] = useState("");

  return (
    <S.AppContainer>
      <Sidebar model={model} apikey={key} setModel={setModel} setKey={setKey}/>
      <Main model={model} apiKey={key}/>
    </S.AppContainer>
  );
}

export default App;
