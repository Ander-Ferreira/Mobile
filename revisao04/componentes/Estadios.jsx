import React from "react";
import {View } from "react-native";
import { Card, PaperProvider, Text } from "react-native-paper";

export default function Estadios(props) {

    //     "id",
    //   "nome",
    //   "cidade",
    //   "capacidade",
    //   "imagem"

    const { nome, cidade, capacidade, imagem } = props

    return (

        <PaperProvider>

            
          <View style={{backgroundColor:'brown'}}>
            <Card style={{backgroundColor:'#F08080'}}>
                <Card.Title title={nome} subtitle={cidade} titleStyle={{color:'white', textAlign:'center'}} subtitleStyle={{color:'white', textAlign:'center'}} />
                <Card.Content>
                    <Card.Cover source={{ uri: imagem }} />
                    <Text style={{ color: 'white' }}>Capacidade: {capacidade}</Text>
                </Card.Content>

            </Card>
            </View>

           




        </PaperProvider>





    )



}