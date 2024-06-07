/// <reference types="vite/client" />

export interface controls {
    Maximize: () => void
    Minimize: () => void
    Close: () => void
}

export interface ContextProps {
    children: ReactNode
}

// Sidebar Context Types
export type INITIALPROPS_SIDEBAR = {
    Sidebar: "" | "Friends"
}
export type INITIALPROPS_SIDEBAR_MODIFICATOR = {
    action: "Sidebar",
    value: any
}
export interface SidebarContextProps {
    SidebarState: INITIALPROPS_SIDEBAR,
    ModifySidebar: ({ action, value }: INITIALPROPS_SIDEBAR_MODIFICATOR) => void
}

// Player Context Types
export type INITIALPROPS_PLAYER = {
    State: boolean,
    Loop: boolean,
    Src: string,
    Volume: number,
    Name: string,
    Artist: string,
    Album: string
}

export type INITIALPROPS_PLAYER_MODIFICATOR = {
    action: "Src" | "Volume" | "Name" | "Artist" | "Album" | "State" | "Loop",
    value: any
}

export interface PlayerContextProps {
    PlayerState: INITIALPROPS_PLAYER,
    ModifyPlayer: ({ action, value }: INITIALPROPS_PLAYER_MODIFICATOR) => void
}