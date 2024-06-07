import PlayerContextComponent from "./context/Player";
import SidebarContextComponent from "./context/Sidebar";
import Library from "./modules/library";
import Main from "./modules/main";
import Topbar from "./modules/topbar";

export default function App() {
  return (
    <PlayerContextComponent>
      <SidebarContextComponent>
        <div id="Application">
          <Topbar />
          <Main />
          <Library />
        </div>
      </SidebarContextComponent>
    </PlayerContextComponent>
  )
}