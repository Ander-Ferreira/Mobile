import React from "react";
import { Card, PaperProvider, Text } from "react-native-paper";
import { Avatar } from 'react-native-paper';

export default function Comissao(props) {

    // "nome",
    // "imagem",
    // "treinador",
    // "titulos_copa_mundo",
    // "administrador",
    // "estadio",
    // "jogadores"

    const { nome, imagem, treinador, titulos_copa_mundo, administrador, estadio } = props

    return (

        <PaperProvider>

            <Card style={{backgroundColor:'blue'}}>
                <Card.Title title={nome} titleStyle={{color:'white', textAlign:'center'}} />
                <Card.Content>
                <Avatar.Image size={125} source={{uri: imagem}} style={{alignSelf:'center', marginTop:'15', marginBottom:'45'}} />
                    <Text style={{ color: 'white' }}>Treinador: {treinador}</Text>
                    <Text style={{ color: 'white' }}>Titulos de Copa: {titulos_copa_mundo}</Text>
                    <Text style={{ color: 'white' }}>Administrador: {administrador}</Text>
                    <Text style={{ color: 'white' }}>Estadios: {estadio}</Text>



                </Card.Content>




            </Card>




        </PaperProvider>




    )


}