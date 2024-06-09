import { useContext, useEffect } from "react"
import { PlayerContext } from "../../../../context"
import { useNavigate } from "react-router-dom";

export default function NowPlaying() {

    const { PlayerState } = useContext(PlayerContext);

    const navigate = useNavigate()

    useEffect(() => {
        PlayerState.Data.Src.length === 0 && navigate("/")
    }, [])

    return (
        <div id="NowPlaying" style={{
            backgroundImage: `url("${PlayerState.Data.Cover}")`,
        }}>
            <div id="NowPlaying-Content">
                <img src={PlayerState.Data.Cover} alt={PlayerState.Data.Name} width={50} />
                <h1>afa</h1>
            </div>
        </div>
    )
}