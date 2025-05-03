import React from "react";
import { View } from "react-native";
import { Card, PaperProvider } from "react-native-paper";

export default function Jogador(props){

    // "id",
    // "nome",
    // "numero",
    // "imagem"

    const {nome, numero, imagem} = props

    return(

        <PaperProvider>

           <View style={{backgroundColor:'yellow'}}>
            <Card style={{backgroundColor:'green'}}>
                <Card.Title title={nome} subtitle={numero} titleStyle={{color:'white', textAlign:'center'}} subtitleStyle={{color:'white', textAlign:'center'}}/>
                <Card.Content>

                    <Card.Cover style={{height:'800'}} source={{uri: imagem}}/>

                </Card.Content>

                {/* Aqui virá o meu card com a comissão técnica*/}
               
                {props.children}


            </Card>
            </View>


        </PaperProvider>


    )
}