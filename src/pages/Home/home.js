import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";
import './home.css';

function Home() {

    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

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
            setLoading(false);
        }

        loadApi();
    }, []);

    if(loading){
        return(
            <div className="loading">
                <h2>Carregando filmes...</h2>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((item) => {
                    return (
                        <article key={item.id}>
                            <strong className="titulo">{item.original_title}</strong>
                            <img className="imagem" src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.title} />
                            <Link className="btn-acessar" to={`/filmes/${item.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    );
}

export default Home;