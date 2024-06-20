import AlbumIcon from "@assets/Album";
import ArtistIcon from "@assets/Artist";
import LikeIcon from "@assets/Like";
import PodcastIcon from "@assets/Podcast";
import SaveIcon from "@assets/Save";

export const LibraryListLinks = [
    {
        Text: "Liked Songs",
        URL: "library/tracks",
        Component: LikeIcon
    },
    {
        Text: "Saves",
        URL: "library/saves",
        Component: SaveIcon
    },
    {
        Text: "Albums",
        URL: "library/albums",
        Component: AlbumIcon
    },
    {
        Text: "Podcast",
        URL: "library/podcast",
        Component: PodcastIcon
    },
    {
        Text: "Artist",
        URL: "library/artists",
        Component: ArtistIcon
    }
]