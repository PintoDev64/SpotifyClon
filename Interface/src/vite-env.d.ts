/// <reference types="vite/client" />

export interface SongProps {
    Id: number,
    Title: string,
    Artist: ArtistList[],
    Album: {
        URL: string,
        Name: string
    }
    imageURL: string
    URL: string,
    Year: number,
    Genres: string[]
}

type ArtistList = {
    URL: string,
    Name: string,
    ImageURL: string,
    Role: string[]
}

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

type INITIAL_PROPS_DATA = {
    Id: number,
    Src: string,
    Name: string,
    Artist: ArtistList[],
    Album: string,
    Cover: string,
    ArtistURL: string
    AlbumURL: string
    Year: number
    Genres: string[]
}
export type INITIALPROPS_PLAYER = {
    State: boolean,
    Loop: boolean,
    Volume: number,
    Data: INITIAL_PROPS_DATA
    DominantColor: string,
}

export type INITIALPROPS_PLAYER_MODIFICATOR = {
    action: "Volume" | "State" | "Loop" | "Data" | "DominantColor",
    value: INITIAL_PROPS_DATA | INITIALPROPS_PLAYER | boolean | string | number
}

export interface PlayerContextProps {
    PlayerState: INITIALPROPS_PLAYER,
    ModifyPlayer: ({ action, value }: INITIALPROPS_PLAYER_MODIFICATOR) => void
}

// Queue Context Types
export type INITIALPROPS_PLAYERSTATS = {
    Src: string,
    Volume: number,
    Name: string,
    Artist: string,
    Album: string,
    Cover: string,
    ArtistURL: string
    AlbumURL: string
}
export type INITIALPROPS_QUEUE = {
    List: INITIALPROPS_PLAYERSTATS[] | [],
}

export type INITIALPROPS_QUEUE_MODIFICATOR = {
    action: "List",
    value: any
}

export interface QueueContextProps {
    QueueState: INITIALPROPS_QUEUE,
    ModifyQueue: ({ action, value }: INITIALPROPS_QUEUE_MODIFICATOR) => void
}