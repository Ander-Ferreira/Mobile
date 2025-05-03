import React from "react";
import Home from "../componentes/Home";


export default function HomeScreen(){


    const copa = {
nome: "Copa do Mundo FIFA 2022",
imagem: 'https://i.pinimg.com/236x/00/63/15/00631561f4895a630508c2b0d0bdb4d1.jpg',
local: "Qatar",
organizacao: "FIFA",
mascote: "La'eeb",
edicao: 22,
ano: 2022,
campeao: "Argentina",
viceCampeao: "França",
};


return(

    <Home

    nome = {copa.nome}
    imagem = {copa.imagem}
    local = {copa.local}
    organizacao = {copa.organizacao}
    mascote = {copa.mascote}
    edicao = {copa.edicao}
    viceCampeao = {copa.viceCampeao}
    
    
    />



    



)




}