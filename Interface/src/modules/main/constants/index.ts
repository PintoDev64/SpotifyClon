import { PlaylistProps, SongProps } from "../../../vite-env"

export const MAINSTYLE = {
    Friends: {
        true: {
            gridTemplateColumns: "calc(100% - 280px) 275px"
        },
        false: {
            gridTemplateColumns: "100%",
        }
    }
}

export const SONGS_EXAMPLES: SongProps[] = [
    {
        Id: 1,
        Title: "A lonely Night",
        Artist: [{
            URL: "/theweeknd",
            Name: "The Weeknd",
            ImageURL: "https://i.scdn.co/image/ab6761610000f178214f3cf1cbe7139c1e26ffbb",
            Role: ["Main artist", "Composer"]
        }],
        Album: {
            Id: "10",
            URL: "/Starboy",
            Name: "Starboy"
        },
        imageURL: "https://i.scdn.co/image/ab67616d0000b273a048415db06a5b6fa7ec4e1a",
        Year: 2016,
        URL: "/ALonelyNight.mp3",
        Genres: ["R&B/Soul", "Hip-hop/rap", "Dance/Electronica"]
    },
    {
        Id: 2,
        Title: "Leave It Alone",
        Artist: [{
            URL: "/a_hisa",
            Name: "a_hisa",
            ImageURL: "https://i.scdn.co/image/ab67616100005174a53f14485bfdfc4917a5e448",
            Role: ["Main artist"]
        }],
        Album: {
            Id: "10",
            URL: "/Colors3",
            Name: "Colors 3"
        },
        imageURL: "https://cdn.wikiwiki.jp/to/w/musedash/Leave%20it%20Alone/::ref/Leave%20it%20Alone.jpg?rev=e076bc56357c5bcbe15745fd94c23987&t=20190516154638",
        Year: 2017,
        URL: "/LeaveItAlone.mp3",
        Genres: ["New Age", "J-Pop", "Anime"]
    },
    {
        Id: 3,
        Title: "After Hours",
        Artist: [{
            URL: "/theweeknd",
            Name: "The Weeknd",
            ImageURL: "https://i.scdn.co/image/ab6761610000f178214f3cf1cbe7139c1e26ffbb",
            Role: ["Main artist", "Composer"]
        }],
        Album: {
            Id: "10",
            URL: "/AfterHours",
            Name: "After Hours"
        },
        imageURL: "https://i.scdn.co/image/ab67616d00001e028863bc11d2aa12b54f5aeb36",
        Year: 2016,
        URL: "/AfterHours.mp3",
        Genres: ["R&B/Soul", "Alternativa/Independiente"]
    }
]


export const PLAYLIST_EXAMPLES: PlaylistProps[] = [
    {
        Id: "10",
        Title: "Discover Weekly",
        Description: "Your weekly mixtape of fresh music",
        imageURL: "https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/43EFKgbWhoTr7lGkU2sUuPVSURXqmVhfdqYiU_p1-Zp5p4ZLmqixFb06yU6_iqpbS5edsvKDILrz2FrTh0xSpOIB5A2m2MLL71H6hYXxZ-s=/NjE6NjE6MzFUNTEtNjAtNA==",
        URL: "/playlist",
        Songs: SONGS_EXAMPLES
    }
]