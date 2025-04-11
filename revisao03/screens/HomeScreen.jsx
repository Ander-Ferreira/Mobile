import React from "react";
import { View } from "react-native";
import { Card, Paragraph, Text } from "react-native-paper";


export default function HomeScreen(){

    return(
        <View style={{alignItems:'center'}}>
         

            <Card style = {{width:'90%'}}>
                <Card.Content>

                    <Paragraph>
                        Um parágrafo qualquer para preencher espaço no meu card.
                    </Paragraph>
                   
              </Card.Content>

              <Card.Cover  source={{uri: 'https://picsum.photos/700'}}/>



            </Card>


            <Card style={{width:'90%'}}>
                <Card.Content>

                    <Paragraph>
                        Um parágrafo qualquer para preencher espaço no meu card.
                    </Paragraph>
                   
              </Card.Content>

              <Card.Cover  source={{uri: 'https://picsum.photos/700'}}/>



            </Card>


        </View>
        




    )
}



