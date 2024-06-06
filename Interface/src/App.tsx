import Library from "./modules/library";
import Main from "./modules/main";
import Topbar from "./modules/topbar";

export default function App() {
  return (
    <div id="Application">
      <Topbar />
      <Main />
      <Library />
    </div>
  )
}