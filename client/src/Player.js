import { useState, useEffect } from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'

export default function Player({accessToken, trackUri}) {
    const [play, setPlay] = useState(false)

    useEffect(() => setPlay(true), [trackUri])

    if (!accessToken) return null
    return <SpotifyPlayer 
        token = {accessToken}
        showSaveIcon
        callback={state => {
            if (!state.isPlaying) setPlay(false)
        }}
        play={play}
        uris = {trackUri ? [trackUri] : []}
        styles={{
            activeColor: '#FF0000',
            bgColor: '#333',
            color: '#90EE90',
            loaderColor: '#fff',
            sliderColor: '#1cb954',
            trackArtistColor: '#ccc',
            trackNameColor: '#fff',
        }}
    />
}