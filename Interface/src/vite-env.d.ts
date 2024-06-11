/// <reference types="vite/client" />

import { MutableRefObject } from "react"

export interface SongProps {
    Id: number,
    Title: string,
    Artist: ArtistList[],
    Album: {
        Id: string
        URL: string
        Name: string
    }
    Lirycs: {
        time: number
        text: string
    }[] | []
    imageURL: string
    URL: string,
    Year: number,
    Genres: string[]
}

export interface PlaylistProps {
    Id: string
    Title: string
    Description: string
    imageURL: string
    URL: string
    Songs: SongProps[]
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
    Sidebar: "Queue" | "Friends" | ""
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
    Volume: string,
    Data: SongProps
    CurrentTime: number
    DominantColor: string,
}

export type INITIALPROPS_PLAYER_MODIFICATOR = {
    action: "Volume" | "State" | "Loop" | "Data" | "DominantColor" | "CurrentTime",
    value: SongProps | INITIALPROPS_PLAYER | boolean | string | number
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
    List: SongProps[] | [],
}

export type INITIALPROPS_QUEUE_MODIFICATOR = {
    action: "List",
    value: SongProps[] | []
}

export interface QueueContextProps {
    QueueState: INITIALPROPS_QUEUE,
    ModifyQueue: ({ action, value }: INITIALPROPS_QUEUE_MODIFICATOR) => void
}