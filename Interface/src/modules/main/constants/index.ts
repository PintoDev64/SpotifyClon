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
        Lirycs: [{
            time: 4.5,
            text: "Gassed up (yeah) yeah"
        }, {
            time: 10.5,
            text: "Hey, na-na-na-na-na-na, hey"
        }, {
            time: 16.8,
            text: "Why would you wanna bring somethin' between us"
        }, {
            time: 20,
            text: "There's nothin' between us, oh-oh-oh, ay"
        }, {
            time: 25,
            text: "Why would you wanna use a life to keep us"
        }, {
            time: 28.5,
            text: "To keep us together, uh, oh-oh-oh"
        }, {
            time: 34,
            text: "Beter when we're both apart"
        }, {
            time: 36,
            text: "Beter when we're both apart"
        },{
            time: 37,
            text: "We're no good for each other, no good for each other"
        }, {
            time: 42,
            text: "Beter when we're both apart"
        }, {
            time: 43.5,
            text: "Beter when we're both apart"
        }, {
            time: 47,
            text: "We're no good for each other"
        }, {
            time: 50,
            text: "A lonely night"
        }, {
            time: 52.5,
            text: "Baby girl, I loved you on a lonely night, oh"
        }, {
            time: 58,
            text: "It was the only time"
        }, {
            time: 60.8,
            text: "And if I led you on then I apologize, oh"
        }, {
            time: 67,
            text: "How can I make you rethink your decision?"
        }, {
            time: 70,
            text: "Unruly decision, oh-oh-oh, hey"
        }, {
            time: 75,
            text: "What's gonna make you rethink your position?"
        }, {
            time: 78,
            text: "I know your intentions, oh-oh-oh"
        }, {
            time: 83,
            text: "Better when we're both apart"
        }, {
            time: 85,
            text: "Better when we're both apart"
        }, {
            time: 88,
            text: "We're no good for each other, no good for each other"
        }, {
            time: 92,
            text: "Better when we're both apart (my baby)"
        }, {
            time: 94,
            text: "Better when we're both apart"
        }, {
            time: 96,
            text: "We're no good for each other"
        }, {
            time: 100,
            text: "A lonely night"
        }, {
            time: 103,
            text: "Baby girl I loved you on a lonely night, oh"
        }, {
            time: 108,
            text: "It was the only time"
        }, {
            time: 111,
            text: "And if I led you on then I apologize, oh"
        }, {
            time: 117,
            text: "♪"
        }, {
            time: 126,
            text: "Better when we're both apart"
        }, {
            time: 128,
            text: "Better when we're both apart"
        }, {
            time: 130,
            text: "We're no good for each other, no good for each other"
        }, {
            time: 135,
            text: "Better when we're both apart (my baby)"
        }, {
            time: 137,
            text: "Better when we're both apart"
        }, {
            time: 139,
            text: "We're no good for each other"
        }, {
            time: 142.5,
            text: "♪"
        }, {
            time: 160,
            text: "A lonely night"
        }, {
            time: 162,
            text: "Baby girl I loved you on a lonely night, hey"
        }, {
            time: 168,
            text: "It was the only time (only time)"
        }, {
            time: 171,
            text: "And if I led you on then I apologize, oh"
        }, {
            time: 177,
            text: "A lonely night"
        }, {
            time: 180,
            text: "Baby girl I loved you on a lonely night, oh"
        }, {
            time: 184,
            text: "It was the only time"
        }, {
            time: 187,
            text: "And if I led you on then I apologize, oh"
        }, {
            time: 195.5,
            text: "Baby girl, I loved you"
        }, {
            time: 198,
            text: "You know I loved you"
        }, {
            time: 200.5,
            text: "Know I loved you"
        }, {
            time: 203,
            text: "Baby, na-na-na-na-na-na-na-na-na-na, ay"
        }],
        imageURL: "https://i.scdn.co/image/ab67616d0000b273a048415db06a5b6fa7ec4e1a",
        Year: 2016,
        URL: "/ALonelyNight.mp3",
        Duration: 220,
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
        Duration: 251,
        Lirycs: [],
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
        Duration: 361,
        Lirycs: [],
        Genres: ["R&B/Soul", "Alternativa/Independiente"]
    }
]


export const PLAYLIST_EXAMPLES: PlaylistProps[] = [
    {
        Id: "10",
        Title: "Discover Weekly",
        Description: "Your weekly mixtape of fresh music",
        imageURL: "https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/43EFKgbWhoTr7lGkU2sUuPVSURXqmVhfdqYiU_p1-Zp5p4ZLmqixFb06yU6_iqpbS5edsvKDILrz2FrTh0xSpOIB5A2m2MLL71H6hYXxZ-s=/NjE6NjE6MzFUNTEtNjAtNA==",
        URL: "/playlist/10",
        Artist: {
            ImageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png",
            Name: "Spotify",
            Role: ["Main Artist"],
            URL: ""
        },
        Year: 2024,
        Songs: SONGS_EXAMPLES
    }
]