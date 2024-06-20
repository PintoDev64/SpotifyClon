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
    Duration: number
    URL: string,
    Year: number,
    Genres: string[]
}

export interface PlaylistProps {
    Id: string
    Title: string
    Description: string
    imageURL: string
    Artist: ArtistList[]
    URL: string
    Year: number,
    Songs: SongProps[]
}

export type ArtistList = {
    URL: string,
    Name: string,
    ImageURL: string,
    Role: string[]
    Banner: string
    Visible?: true | boolean
}

export interface SocialsStructure {
    Type: "Facebook" | "Twitter" | "External" | "Instagram",
    Text: string
    Url: string
}
export interface MonthlyListener {
    Total: number
    Top5: {
        NameCity: string
        Value: number
    }[]
}

export type ArtistList_API = {
    URL: string,
    Name: string,
    ImageURL: string,
    Role: string[]
    Banner: string
    Top5: [SongProps, SongProps, SongProps, SongProps, SongProps]
    Discography: PlaylistProps[]
    Visible?: true | boolean
    Data: {
        Clasification: number | 0
        Followers: nmuber
        Description: string
        MonthlyListeners: MonthlyListener
        Socials: SocialsStructure[]
    }
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
    Sidebar: "Queue" | "Friends" | "" | string
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
    Playlist: string,
    DominantColor: string,
    audioRef: MutableRefObject<HTMLAudioElement>
}

type INITIALPROPS_PLAYER_MIDIFICATOR_ACTION = "Volume" | "State" | "Loop" | "Data" | "DominantColor" | "CurrentTime" | "Playlist"
type INITIALPROPS_PLAYER_MIDIFICATOR_VALUE = SongProps | INITIALPROPS_PLAYER | boolean | string | number

export type INITIALPROPS_PLAYER_MODIFICATOR = {
    action: INITIALPROPS_PLAYER_MIDIFICATOR_ACTION,
    value: INITIALPROPS_PLAYER_MIDIFICATOR_VALUE
}

export type INITIALPROPS_PLAYER_DISPATCH_MODIFICATOR = {
    action: INITIALPROPS_PLAYER_MIDIFICATOR_ACTION
    value: INITIALPROPS_PLAYER_MIDIFICATOR_VALUE
}

export interface PlayerContextProps {
    PlayerState: INITIALPROPS_PLAYER,
    ModifyPlayer: ({ action, value }: INITIALPROPS_PLAYER_MODIFICATOR) => void
}

// Queue Context Types
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

// Search Context Types
export type INITIALPROPS_APP = {
    Query: string
}

export type INITIALPROPS_APP_MODIFICATOR = {
    action: "Query",
    value: string
}

export interface AppContextProps {
    AppState: INITIALPROPS_APP,
    ModifyApp: ({ action, value }: INITIALPROPS_APP_MODIFICATOR) => void
}
