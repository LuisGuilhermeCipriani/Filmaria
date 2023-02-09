import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/home";
import Filmes from "./pages/Filmes/filmes";
import Favoritos from "./pages/Favoritos/favoritos";
import Erro from "./pages/Erro/erro";

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/filmes" element={<Filmes/>}/>
                <Route path="/favoritos" element={<Favoritos/>}/>
                
                <Route path="*" element={<Erro/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;