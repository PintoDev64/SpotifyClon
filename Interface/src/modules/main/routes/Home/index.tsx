export default function Home() {

    navigator.userAgent === "SpotifyClon" ? document.title = "Spotify Clon - App" : document.title = "Spotify Clon - Web Player"

    return (
        <>
            <h1 id="MainContent-Home-Content">Inicio</h1>
        </>
    )
}