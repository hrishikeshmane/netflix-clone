import axios from './axios';
import React, { useState, useEffect } from 'react';
import "./Row.css";

export default function Row({ title, fetchURL, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);

    const baseURL = "https://image.tmdb.org/t/p/original"

    useEffect(() => {
        async function fetchData() {
            const requests = await axios.get(fetchURL);
            setMovies(requests.data.results);
            return requests;
        }

        fetchData();
    }, [fetchURL]);

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {
                    movies.map((movie) => (
                        (isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
                            <div className={`row__container ${isLargeRow && "row__containerLarge"}`}>
                                <img
                                    // className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                                    key={movie.id}
                                    src={`${baseURL}${
                                            isLargeRow ? movie.poster_path : movie.backdrop_path
                                        }`}
                                    alt={ movie?.title || movie?.name || movie?.original_name }
                                />
                                <small className="row__posterName">{movie?.title || movie?.name || movie?.original_name}</small>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}
