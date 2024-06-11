import FileUpload from "./FileUpload";
import ModeSelect from "./Modeselect";

import * as S from "../styles/sidebar.style";

const Sidebar = () => {
  return (
    <S.SidebarContainer>
      <FileUpload maxFiles={10} maxSize={10485760}/>
      <ModeSelect />
    </S.SidebarContainer>
  );
}

export default Sidebar;