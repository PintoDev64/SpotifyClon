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
export type INITIALPROPS_MODIFICATOR = {
    action: "Sidebar",
    value: any
}
export interface SidebarContextProps {
    SidebarState: INITIALPROPS_SIDEBAR,
    ModifySidebar: ({ action, value }: INITIALPROPS_MODIFICATOR) => void
}