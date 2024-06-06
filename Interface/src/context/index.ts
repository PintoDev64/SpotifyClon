import { createContext } from "react";
import { SidebarContextProps } from "../vite-env";

const SidebarContext = createContext<SidebarContextProps>(null!)

export {
    SidebarContext
}