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

export const PLAYLIST_EXAMPLES = [
    {
        Title: "Discover Weekly",
        Description: "Your weekly mixtape of fresh music",
        imageURL: "https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/43EFKgbWhoTr7lGkU2sUuPVSURXqmVhfdqYiU_p1-Zp5p4ZLmqixFb06yU6_iqpbS5edsvKDILrz2FrTh0xSpOIB5A2m2MLL71H6hYXxZ-s=/NjE6NjE6MzFUNTEtNjAtNA==",
        URL: "/playlist"
    },
    {
        Title: "Wakamo",
        Description: "Playlist for Blue archive Fans",
        imageURL: "https://steamuserimages-a.akamaihd.net/ugc/1850418301803078440/DEA1D8E30EE56AF19872FD292A96E92CE183B68D/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
        URL: "/playlist"
    }
]

export const SONGS_EXAMPLES = [
    {
        Id: 1,
        Title: "A lonely Night",
        Artist: {
            URL: "/theweeknd",
            Name: "The Weeknd"
        },
        Album: {
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
        Artist: {
            URL: "/a_hisa",
            Name: "a_hisa"
        },
        Album: {
            URL: "/Colors3",
            Name: "Colors 3"
        },
        imageURL: "https://cdn.wikiwiki.jp/to/w/musedash/Leave%20it%20Alone/::ref/Leave%20it%20Alone.jpg?rev=e076bc56357c5bcbe15745fd94c23987&t=20190516154638",
        Year: 2017,
        URL: "/LeaveItAlone.mp3",
        Genres: ["New Age", "J-Pop", "Anime"]
    }
]