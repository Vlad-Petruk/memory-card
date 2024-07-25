import "./MusicBtn.css"

function MusicBtn ({musicState, handleClick}) {
    return (
        <div className="music-btn" onClick={() => handleClick(!musicState)}>
            {musicState ? <img src="/music_sign.svg"/> : <img src="/music_off.svg"/>}
        </div>
    )
}

export default MusicBtn