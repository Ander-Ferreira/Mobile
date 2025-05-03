import React from "react";
import { ScrollView } from "react-native";
import { Card, PaperProvider, Text } from "react-native-paper";

export default function Home(props){

//     "nome",
//   "imagem",
//   "local",
//   "organizacao",
//   "mascote",
//   "edicao",
//   "ano",
//   "campeao",
//   "viceCampeao"

const {nome, imagem, local, organizacao, mascote, edicao, ano, campeao, viceCampeao} = props

    return(

        <PaperProvider>

            <ScrollView style={{backgroundColor:'yellow'}}>
            <Card style={{backgroundColor:'green'}}>
                <Card.Title title={nome} subtitle={local} titleStyle={{textAlign:'center', color:'white'}} subtitleStyle={{textAlign:'center', color:'white'}}/>
                <Card.Content>
                    
                    <Card.Cover style={{height:'400'}} source={{ uri:imagem }} />
                    <Text style={{color:'white'}}>Organização: {organizacao}</Text>
                    <Text style={{color:'white'}}>Mascote: {mascote}</Text>
                    <Text style={{color:'white'}}>Edição: {edicao}</Text>
                    <Text style={{color:'white'}}>Ano: {ano}</Text>
                    <Text style={{color:'white'}}>Campeão: {campeao}</Text>
                    <Text style={{color:'white'}}>Vice-campeão: {viceCampeao}</Text>
                    

                    

                </Card.Content>



            </Card>
            </ScrollView>

        </PaperProvider>
        




    )


}