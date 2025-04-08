import React from "react";
import { PaperProvider, Avatar, Card } from "react-native-paper";


export default function Jogadores(props){

       const {nome, numero, imagem} = props

    return(

       
            <Card.Title
      title={nome}
      subtitle={numero}
      left={(props) => <Avatar.Image {...props} source={{ uri: imagem }} />}
      
    />
       






    )
}