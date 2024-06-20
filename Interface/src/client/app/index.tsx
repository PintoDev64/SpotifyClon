import { Analytics } from "@vercel/analytics/react";
// Context
import PlayerContextComponent from "@contextComponent/Player";
import SidebarContextComponent from "@contextComponent/Sidebar";
import QueueContextComponent from "@contextComponent/Queue";
import AppContextComponent from "@contextComponent/Application";
import Template from "../template";
import Main from "./main";
;

export default function App() {
    return (
        <>
            <AppContextComponent>
                <QueueContextComponent>
                    <PlayerContextComponent>
                        <SidebarContextComponent>
                            <Template>
                                <Main />
                            </Template>
                        </SidebarContextComponent>
                    </PlayerContextComponent>
                </QueueContextComponent>
            </AppContextComponent>
            <Analytics />
        </>
    )
}