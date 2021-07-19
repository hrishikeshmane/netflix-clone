import React from 'react'
import "./HomeScreen.css";
import Nav from "../Nav";
import Banner from "../Banner";
import Row from "../Row";
import requests from "../Requests"

function HomeScreen() {
    return (
        <div className="homeScreen">
            <Nav />
            <Banner />

            <Row
                title="Netflix Originals"
                fetchURL={requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row
                title="Trending Now"
                fetchURL={requests.fetchTrending}
            />
            <Row
                title="Action Movies"
                fetchURL={requests.fetchActionMovies}
            />
            <Row
                title="Comedy Movie"
                fetchURL={requests.fetchComedyMovies}
            />
            <Row
                title="Romance Movie"
                fetchURL={requests.fetchRomanceMovies}
            />
            <Row
                title="Documentaries"
                fetchURL={requests.fetchDocumentaries}
            />
        </div>
    )
}

export default HomeScreen
