import { createContext } from "react";
import { PlayerContextProps, SidebarContextProps } from "../vite-env";

const SidebarContext = createContext<SidebarContextProps>(null!);
const PlayerContext = createContext<PlayerContextProps>(null!);

export {
    SidebarContext,
    PlayerContext
}