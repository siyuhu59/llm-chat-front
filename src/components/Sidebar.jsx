import FileUpload from "./FileUpload";
import ModeSelect from "./Modeselect";

import * as S from "../styles/sidebar.style";

const Sidebar = ({model, setModel, apikey, setKey}) => {
  return (
    <S.SidebarContainer>
      <FileUpload maxFiles={10} maxSize={10485760}/>
      <ModeSelect model={model} setModel={setModel} apikey={apikey} setKey={setKey}/>
    </S.SidebarContainer>
  );
}

export default Sidebar;