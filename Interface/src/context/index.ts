import { createContext } from "react";
import { PlayerContextProps, QueueContextProps, AppContextProps, SidebarContextProps } from "../vite-env";

const SidebarContext = createContext<SidebarContextProps>(null!);
const PlayerContext = createContext<PlayerContextProps>(null!);
const QueueContext = createContext<QueueContextProps>(null!);
const AppContext = createContext<AppContextProps>(null!);

export {
    SidebarContext,
    PlayerContext,
    QueueContext,
    AppContext
}