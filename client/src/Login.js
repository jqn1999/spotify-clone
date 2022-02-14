import React from 'react'
import { Container } from 'react-bootstrap'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=aa581b816ead4cd3ae40afad88e6c6ab&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"
export default function Login() {
    document.body.style.backgroundColor = "#90EE90";
    return <Container className="d-flex justify-center align-items-center" style={{ minHeight: "100vh"}}>
        <a className="btn btn-success btn-lg" href={AUTH_URL}>
            Login with Spotify
        </a>
    </Container>
}