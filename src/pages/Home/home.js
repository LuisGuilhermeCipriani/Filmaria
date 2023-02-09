import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";
import './home.css';

function Home() {

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        async function loadApi() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "782237ee5f2ffb36154141fec759fcfc",
                    language: "pt-BR",
                    page: 1,
                }
            })
            setFilmes(response.data.results.slice(0, 10));
        }

        loadApi();
    }, []);

    return (
        <div className="container">
            <div className="lista_filmes">
                {filmes.map((item) => {
                    return (
                        <article key={item.id}>
                            <strong>{item.original_title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.title} />
                            <Link to={`/filmes/${item.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    );
}

export default Home;