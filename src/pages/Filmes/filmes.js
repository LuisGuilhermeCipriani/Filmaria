import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";

function Filmes() {

    const { id } = useParams();
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        async function loadApi() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: '782237ee5f2ffb36154141fec759fcfc',
                    language: 'pt-BR',
                }
            })
            .then((response) => {
                setFilmes(response.data);
                setLoading(false);
            })
            .catch(() => {
                navigate(`/`, { replace: true });
                return;
            })
        }
        loadApi();
    }, [navigate, id]);

    function salvarFilme(){

    }

    if (loading) {
        return (
            <div className="loading">
                <h2>Carregando detalhes...</h2>
            </div>
        )
    }

    return (
        <div className="container">
            <h1>{filmes.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filmes.backdrop_path}`} alt={filmes.title} />
            <h3>Sinopse</h3>
            <span>{filmes.overview}</span>
            <strong>Avaliação: {filmes.vote_average} / 10</strong>

            <div className="area-buttons">
                <button onClick={salvarFilme}>Salvar</button>
                <button><a target="_blank" href={`https://youtube.com/results?search_query=${filmes.title} Trailer`}>Trailer</a></button>
            </div>
        </div>
    );
}

export default Filmes;