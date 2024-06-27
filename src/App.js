import { useState } from "react";

import * as S from "./styles/app.style";

import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Settings from "./components/Settings";

const App = () => {
  const [model, setModel] = useState("ollama");
  const [key, setKey] = useState("");
  const [hide, setHide] = useState(false);
  const onToggle = () => {
    setHide(!hide);
  }

  return (
    <S.AppContainer>
      <Sidebar model={model} apikey={key} setModel={setModel} setKey={setKey}/>
      <Main model={model} apiKey={key} hide={hide}/>
      <Settings hide={hide}/>
      <S.SidebarToggleButton className={hide ? 'hide' : ''} onClick={onToggle}><span></span></S.SidebarToggleButton>
    </S.AppContainer>
  );
}

export default App;
