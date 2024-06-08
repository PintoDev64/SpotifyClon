import { useState } from "react";
import PlayerContextComponent from "./context/Player";
import SidebarContextComponent from "./context/Sidebar";
import Library from "./modules/library";
import Main from "./modules/main";
import Topbar from "./modules/topbar";

export default function App() {

  const [LibraryStatus, setLibraryStatus] = useState(localStorage.getItem("LibraryState") ?? "false")

  return (
    <PlayerContextComponent>
      <SidebarContextComponent>
        <div id="Application" className={`${LibraryStatus === "true" ? "Application-Compact" : "Application-Complete"}`}>
          <Topbar LibraryStatus={LibraryStatus}/>
          <Main />
          <Library setLibraryStatus={setLibraryStatus}/>
        </div>
      </SidebarContextComponent>
    </PlayerContextComponent>
  )
}