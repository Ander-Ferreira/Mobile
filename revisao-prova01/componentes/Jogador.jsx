import React from "react";
import { View } from "react-native";
import { Card, PaperProvider, Paragraph } from "react-native-paper";



//Agora estarei criando o componente de jogador, mesmo esquema do componente de Time

export default function Jogador(props){


    const {nome, numero, imagem} = props

    

    return(

        <PaperProvider>

            <View style={{ backgroundColor: 'grey', flex: 1, padding: 20, borderRadius: 25, marginBottom: 20 }}>

                <Card style={{backgroundColor:'brown'}}>

                    <Card.Title  title={nome} subtitle={`Camisa: ${numero}`} subtitleStyle={{color: 'white'}} titleStyle={{ color: 'white' }}/>
                    
                    <Card.Content>

                        <Paragraph style={{color:'white'}}>Aqui vai um texto de descrição do time, não importa o time o Curinthia vai ser o mior</Paragraph>

                    </Card.Content>

                    <Card.Cover source={{uri: imagem}} />





                </Card>






            </View>




        </PaperProvider>




    )

}