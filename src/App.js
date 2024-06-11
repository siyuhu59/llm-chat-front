import * as S from "./styles/app.style";

import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

const App = () => {
  return (
    <S.AppContainer>
      <Sidebar />
      <Main />
    </S.AppContainer>
  );
}

export default App;
