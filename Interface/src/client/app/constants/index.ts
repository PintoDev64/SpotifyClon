import { ArtistList, ArtistList_API, PlaylistProps, SongProps } from "../../../vite-env"

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

export const ARTIST_EXAMPLE: ArtistList[] = [
    {
        URL: "1Xyo4u8uXC1ZmMpatF05PJ",
        Name: "The Weeknd",
        ImageURL: "https://i.scdn.co/image/ab6761610000f178214f3cf1cbe7139c1e26ffbb",
        Role: ["Main artist", "Composer"],
        Banner: "https://i.scdn.co/image/ab6761860000101606f7730314d8eff6663d6918"
    },
    {
        URL: "1Z0wvI3WTpFLvbVrIBoDr7",
        Name: "a_hisa",
        ImageURL: "https://i.scdn.co/image/ab67616100005174a53f14485bfdfc4917a5e448",
        Role: ["Main artist"],
        Banner: "",
    },
    {
        ImageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png",
        Name: "Spotify",
        Role: ["Main Artist"],
        URL: "",
        Banner: "",
        Visible: false
    }
]

export const SONGS_EXAMPLES: SongProps[] = [
    {
        Id: 1,
        Title: "A lonely Night",
        Artist: [ARTIST_EXAMPLE[0]],
        Album: {
            Id: "4AdZV63ycxFLF6Hcol0QnB",
            URL: "/playlist/4AdZV63ycxFLF6Hcol0QnB",
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
        }, {
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
        imageURL: "/StarboyCover.jpeg",
        Year: 2016,
        URL: "/ALonelyNight.mp3",
        Duration: 220,
        Genres: ["R&B/Soul", "Hip-hop/rap", "Dance/Electronica"]
    },
    {
        Id: 2,
        Title: "Leave It Alone",
        Artist: [ARTIST_EXAMPLE[1]],
        Album: {
            Id: "10",
            URL: "/Colors3",
            Name: "Colors 3"
        },
        imageURL: "/LeaveItAlone.jpg",
        Year: 2017,
        URL: "/LeaveItAlone.mp3",
        Duration: 251,
        Lirycs: [],
        Genres: ["New Age", "J-Pop", "Anime"]
    },
    {
        Id: 3,
        Title: "After Hours",
        Artist: [ARTIST_EXAMPLE[0]],
        Album: {
            Id: "jhdksajhgdia",
            URL: "/playlist/jhdksajhgdia",
            Name: "After Hours"
        },
        imageURL: "/AfterHoursCover.jpeg",
        Year: 2016,
        URL: "/AfterHours.mp3",
        Duration: 361,
        Lirycs: [],
        Genres: ["R&B/Soul", "Alternativa/Independiente"]
    },
    {
        Id: 4,
        Title: "Heartless",
        Album: {
            Id: "jhdksajhgdia",
            URL: "/playlist/jhdksajhgdia",
            Name: "After Hours"
        },
        Artist: [ARTIST_EXAMPLE[0]],
        Duration: 198,
        Genres: ["R&B contemporary", "Trap", "R&B/Soul", "Alternativa/Independiente"],
        imageURL: "/AfterHoursCover.jpeg",
        Lirycs: [{
            time: 23,
            text: "Never need a bitch, I'm what a bitch need (Bitch need)"
        }, {
            time: 26,
            text: "Tryna find the one that can fix me"
        }, {
            time: 28.5,
            text: "I've been dodgin' death in the six speed"
        }, {
            time: 31,
            text: "Amphetamine got my stummy feelin' sickly"
        }, {
            time: 35,
            text: "Yeah, I want it all now"
        }, {
            time: 37,
            text: "I've been runnin' through the pussy, need a dog pound"
        }, {
            time: 40,
            text: "Hundred models gettin' faded in the compound"
        }, {
            time: 42.5,
            text: "Tryna love me, but they never get a pulse down"
        }, {
            time: 46,
            text: "Why? 'Cause I'm heartless"
        }, {
            time: 48,
            text: "And I'm back to my ways 'cause I'm heartless"
        }, {
            time: 51,
            text: "All this money and this pain got me heartless"
        }, {
            time: 54,
            text: "Low life for life 'cause I'm heartless"
        }, {
            time: 58,
            text: "Said I'm heartless"
        }, {
            time: 60,
            text: "Tryna be a better man, but I'm heartless"
        }, {
            time: 62,
            text: "Never be a weddin' plan for the heartless"
        }, {
            time: 65,
            text: "Low life for life 'cause I'm heartless"
        }, {
            time: 69,
            text: "Said I'm heartless"
        }, {
            time: 71,
            text: "So much pussy, it be fallin' out the pocket"
        }, {
            time: 73,
            text: "Metro Boomin turn this ho into a moshpit"
        }, {
            time: 76,
            text: "Tesla pill got me flyin' like a cockpit"
        }, {
            time: 80,
            text: "Yeah, I got her watchin'"
        }, {
            time: 83,
            text: "Call me up, turn that pussy to a faucet"
        }, {
            time: 85,
            text: "Duffle bags full of drugs and a rocket"
        }, {
            time: 88,
            text: "Stix drunk, but he never miss a target"
        }, {
            time: 91,
            text: "Photoshoots, I'm a star now (Star)"
        }, {
            time: 93,
            text: "I'm talkin' Time, Rolling Stone, and Bazaar now ('Zaar)"
        }, {
            time: 96,
            text: "Sellin' dreams to these girls with their guard down (What?)"
        }, {
            time: 99,
            text: "Seven years, I've been swimmin' with the sharks now"
        }, {
            time: 102,
            text: "Why? 'Cause I'm heartless"
        }, {
            time: 105,
            text: "And I'm back to my ways 'cause I'm heartless"
        }, {
            time: 107.5,
            text: "All this money and this pain got me heartless"
        }, {
            time: 111,
            text: "Low life for life 'cause I'm heartless"
        }, {
            time: 114.5,
            text: "Said I'm heartless"
        }, {
            time: 116,
            text: "Tryna be a better man, but I'm heartless"
        }, {
            time: 119,
            text: "Never be a weddin' plan for the heartless"
        }, {
            time: 122,
            text: "Low life for life 'cause I'm heartless"
        }, {
            time: 127,
            text: "I lost my heart and my mind"
        }, {
            time: 132,
            text: "I try to always do right"
        }, {
            time: 137.5,
            text: "I thought I lost you this time"
        }, {
            time: 143.5,
            text: "You just came back in my life"
        }, {
            time: 150,
            text: "You never gave up on me (Why don't you?)"
        }, {
            time: 155,
            text: "I'll never know what you see (Why won't you?)"
        }, {
            time: 161,
            text: "I don't do well when alone (Oh yeah)"
        }, {
            time: 167,
            text: "You hear it clear in my tone"
        }, {
            time: 171,
            text: "'Cause I'm heartless"
        }, {
            time: 172.5,
            text: "And I'm back to my ways 'cause I'm heartless"
        }, {
            time: 175,
            text: "All this money and this pain got me heartless"
        }, {
            time: 178,
            text: "Low life for life 'cause I'm heartless"
        }, {
            time: 182,
            text: "Said I'm heartless"
        }, {
            time: 184,
            text: "Tryna be a better man, but I'm heartless"
        }, {
            time: 186,
            text: "Never be a weddin' plan for the heartless"
        }, {
            time: 188.5,
            text: "Low life for life 'cause I'm heartless"
        }],
        URL: "/Heartless.mp3",
        Year: 2020
    },
    {
        Id: 5,
        Title: "Take My Breath",
        Artist: [ARTIST_EXAMPLE[0]],
        Album: {
            Id: "dhjasgdjhasg",
            URL: "/playlist/dhjasgdjhasg",
            Name: "Dawn FM"
        },
        imageURL: "/DawnFMCover.jpeg",
        Year: 2022,
        URL: "/TakeMyBreath.mp3",
        Duration: 339,
        Lirycs: [],
        Genres: ["R&B/Soul", "Dance/Electronica", "Alternativa/Independiente"]
    },
    {
        Id: 6,
        Title: "Sacrifice",
        Artist: [ARTIST_EXAMPLE[0]],
        Album: {
            Id: "dhjasgdjhasg",
            URL: "/playlist/dhjasgdjhasg",
            Name: "Dawn FM"
        },
        imageURL: "/DawnFMCover.jpeg",
        Year: 2022,
        URL: "/Sacrifice.mp3",
        Duration: 188,
        Lirycs: [{
            time: 7,
            text: "I was born in a city"
        }, {
            time: 11,
            text: "Where the winter nights don't ever sleep"
        }, {
            time: 14,
            text: "So this life's always with me"
        }, {
            time: 19,
            text: "The ice inside my veins will never bleed"
        }, {
            time: 23,
            text: "♪"
        }, {
            time: 29,
            text: "Uh, every time you try to fix me"
        }, {
            time: 34,
            text: "I know you'll never find that missing piece"
        }, {
            time: 38,
            text: "When you cry and say you miss me"
        }, {
            time: 42,
            text: "I lie and tell you that I'll never leave, but"
        }, {
            time: 46,
            text: "I sacrifice (sacrifice)"
        }, {
            time: 48,
            text: "Your love for more of the night (of the night)"
        }, {
            time: 53,
            text: "I try to put up a fight (up a fight)"
        }, {
            time: 57,
            text: "Can't tie me down (down)"
        }, {
            time: 61,
            text: "I don't wanna sacrifice"
        }, {
            time: 65,
            text: "For your love, I try"
        }, {
            time: 69,
            text: "I don't wanna sacrifice"
        }, {
            time: 73,
            text: "But I love my time"
        }, {
            time: 79,
            text: "♪"
        }, {
            time: 84,
            text: "I hold you through the toughest parts"
        }, {
            time: 87,
            text: "When you feel like it's the end"
        }, {
            time: 89,
            text: "'Cause life is still worth living"
        }, {
            time: 91.5,
            text: "Yeah, this life is still worth living"
        }, {
            time: 94,
            text: "I can break you down and pick you up"
        }, {
            time: 95,
            text: "And fuck like we are friends"
        }, {
            time: 97,
            text: "But don't be catching feelings"
        }, {
            time: 99,
            text: "Don't be out here catching feelings 'cause"
        }, {
            time: 102,
            text: "I sacrifice (sacrifice)"
        }, {
            time: 104,
            text: "Your love for more of the night (of the night)"
        }, {
            time: 108,
            text: "I try to put up a fight (up a fight)"
        }, {
            time: 112,
            text: "Can't tie me down (down, down, down)"
        }, {
            time: 116,
            text: "I don't wanna sacrifice"
        }, {
            time: 120,
            text: "For your love, I try"
        }, {
            time: 124,
            text: "I don't wanna sacrifice"
        }, {
            time: 128,
            text: "But I love my time"
        }, {
            time: 132,
            text: "I don't wanna sacrifice"
        }, {
            time: 136,
            text: "For your love, I try"
        }, {
            time: 139,
            text: "I don't wanna sacrifice"
        }, {
            time: 144,
            text: "But I love my time"
        }, {
            time: 149,
            text: "Oh, baby"
        }, {
            time: 151,
            text: "I hope you know that I, I tried"
        }, {
            time: 157,
            text: "Oh, baby (baby)"
        }, {
            time: 159,
            text: "I hope you know I love my time, oh"
        }, {
            time: 164,
            text: "I don't wanna sacrifice"
        }, {
            time: 168,
            text: "I don't wanna, I try (hey)"
        }, {
            time: 172,
            text: "I don't wanna sacrifice"
        }, {
            time: 176,
            text: "But I love my time"
        }],
        Genres: ["R&B/Soul", "Dance/Electronica", "Alternativa/Independiente"]
    }
]

export const PLAYLIST_EXAMPLES: PlaylistProps[] = [
    {
        Id: "10",
        Title: "Discover Weekly",
        Description: "Your weekly mixtape of fresh music",
        imageURL: "/DiscoverWeeklyCover.jpeg",
        URL: "/playlist/10",
        Artist: [ARTIST_EXAMPLE[2]],
        Year: 2024,
        Songs: SONGS_EXAMPLES
    },
    {
        Id: "jhdksajhgdia",
        Title: "After Hours",
        Description: "The Weeknd",
        imageURL: "/AfterHoursCover.jpeg",
        URL: "/playlist/jhdksajhgdia",
        Artist: [ARTIST_EXAMPLE[0]],
        Year: 2020,
        Songs: [{ ...SONGS_EXAMPLES[2] }, { ...SONGS_EXAMPLES[3] }]
    },
    {
        Id: "4AdZV63ycxFLF6Hcol0QnB",
        Title: "Starboy",
        Description: ARTIST_EXAMPLE[2].Name,
        imageURL: "/StarboyCover.jpeg",
        Year: 2016,
        Artist: [ARTIST_EXAMPLE[0]],
        Songs: [{ ...SONGS_EXAMPLES[0] }],
        URL: "/playlist/4AdZV63ycxFLF6Hcol0QnB"
    },
    {
        Id: "dhjasgdjhasg",
        Title: "Dawn FM",
        Description: "The Weeknd",
        imageURL: "/DawnFMCover.jpeg",
        Year: 2016,
        Artist: [ARTIST_EXAMPLE[0]],
        Songs: [{ ...SONGS_EXAMPLES[4] }, { ...SONGS_EXAMPLES[5] }],
        URL: "/playlist/dhjasgdjhasg"
    }
]

export const ARTIST_COMPLETE_EXAMPLE: ArtistList_API[] = [
    {
        URL: "1Xyo4u8uXC1ZmMpatF05PJ",
        Name: "The Weeknd",
        ImageURL: "https://i.scdn.co/image/ab6761610000f178214f3cf1cbe7139c1e26ffbb",
        Role: ["Main artist", "Composer"],
        Banner: "https://i.scdn.co/image/ab6761860000101606f7730314d8eff6663d6918",
        Top5: [SONGS_EXAMPLES[0], SONGS_EXAMPLES[2], SONGS_EXAMPLES[3], SONGS_EXAMPLES[2], SONGS_EXAMPLES[3]],
        Discography: [
            {
                Id: "jhdksajhgdia",
                Title: "After Hours",
                Description: "The Weeknd",
                imageURL: "/AfterHoursCover.jpeg",
                URL: "/playlist/jhdksajhgdia",
                Artist: [ARTIST_EXAMPLE[0]],
                Year: 2020,
                Songs: [{ ...SONGS_EXAMPLES[2] }, { ...SONGS_EXAMPLES[3] }]
            },
            {
                Id: "4AdZV63ycxFLF6Hcol0QnB",
                Title: "Starboy",
                Description: ARTIST_EXAMPLE[2].Name,
                imageURL: "/StarboyCover.jpeg",
                Year: 2016,
                Artist: [ARTIST_EXAMPLE[0]],
                Songs: [{ ...SONGS_EXAMPLES[0] }],
                URL: "/playlist/4AdZV63ycxFLF6Hcol0QnB"
            }
        ],
        Data: {
            Clasification: 1,
            Followers: 84645824,
            Description: "The Weeknd took over pop music & culture on his own terms filtering R&B, Pop,& hip-hop through an ambitious widescreen lens. The multi-platinum 3X GRAMMY Award winner has emerged as one of the most successful & significant artists of the modern era. 2012`s 3X platinum  collated 3 breakout mixtapes—House of Balloons, Thursday & Echoes of Silence—into his 1st chart-topping collection followed by his debut LP  in 2013. Two years later, “Earned It (Fifty Shades of Grey)” won “Best R&B Performance” & received an Academy Award nod for “Best Original Song” & 4X Platinum  won a GRAMMY for “Best Urban Contemporary Album.” In 2018,  won the same award, making him the 1st artist ever to win twice. His 6-track project My Dear Melancholy marked his 3rd consecutive #1 bow on the Billboard Top 200, & “Pray For Me” with Kendrick Lamar &  was featured in the trailer for the Academy Award winning Marvel film Black Panther. In 2020 the 80`s-nostalgic track  became a worldwide sensation, igniting viral dance challenges across social media, peaking at #1 in 30+ countries & headlining Mercedes Benz EQC campaign.  held the #1 spot on Billboard 200 for 4 consecutive weeks, marking his 4th #1 album & becoming the first to ever rank #1 on the Billboard 200, Hot 100, and Artist 100 simultaneously.  is the #1 R&B streaming album of all time (followed by  at #2).",
            MonthlyListeners: {
                Total: 107043404,
                Top5: [
                    {
                        NameCity: "Jakarta, ID",
                        Value: 1748755
                    },
                    {
                        NameCity: "Sao Paulo, BR",
                        Value: 1461405
                    },
                    {
                        NameCity: "London, GB",
                        Value: 1351354
                    },
                    {
                        NameCity: "Mexico City, MX",
                        Value: 1252746
                    },
                    {
                        NameCity: "Los Angeles, US",
                        Value: 1128382
                    }
                ]
            },
            Socials: [
                {
                    Text: "Twitter",
                    Type: "Twitter",
                    Url: "https://x.com/theweeknd"
                },
                {
                    Text: "Facebook",
                    Type: "Facebook",
                    Url: "https://www.facebook.com/theweeknd/"
                },
                {
                    Text: "Instagram",
                    Type: "Instagram",
                    Url: "https://www.instagram.com/theweeknd/?hl=en"
                },
                {
                    Text: "Wikipedia",
                    Type: "External",
                    Url: "https://en.wikipedia.org/wiki/The_Weeknd"
                }
            ]
        }
    }
]