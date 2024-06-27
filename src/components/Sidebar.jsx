import FileUpload from "./FileUpload";
import ModeSelect from "./Modeselect";

import * as S from "../styles/sidebar.style";

const Sidebar = ({config, setConfig, setFiles}) => {
  return (
    <S.SidebarContainer>
      <FileUpload maxFiles={10} maxSize={10485760} setFileNames={setFiles}/>
      <ModeSelect config={config} setConfig={setConfig}  />
    </S.SidebarContainer>
  );
}

export default Sidebar;