import { createContext } from "react";
import { PlayerContextProps, QueueContextProps, SidebarContextProps } from "../vite-env";

const SidebarContext = createContext<SidebarContextProps>(null!);
const PlayerContext = createContext<PlayerContextProps>(null!);
const QueueContext = createContext<QueueContextProps>(null!);

export {
    SidebarContext,
    PlayerContext,
    QueueContext
}