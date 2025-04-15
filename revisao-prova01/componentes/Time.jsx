import React from "react";
import { View } from "react-native";
import { PaperProvider, Avatar, Card, Text, Title, Paragraph } from "react-native-paper";



export default function Time(props) {

    //Como estaremos trabalhando com componentes, precisamos de um props
    //Os props nada mais serão do que aquilo que queremos acessar em nosso objeto ou array
    //Neste caso, eu quero acessar posteriormente valor {nome, escudo} do objeto time

    const { nome, escudo } = props

    return (

        <PaperProvider>

            <View style={{ backgroundColor: 'grey', flex: 1, padding: 20, borderRadius: 25 }}>

                <Card style={{backgroundColor:'brown'}}>

                    <Card.Title titleStyle={{ color: 'white' }} title={nome} />

                    <Card.Content>


                       {/* Essa view extra só coloquei para centralizar a imagem como eu bem entendesse, é opcional */}
                        
                        <View style={{ alignItems: 'right' }}>
                            <Avatar.Image size={65} source={{ uri: escudo }} />
                        </View>

                        <Paragraph style={{color:'white'}}>
                            Aqui temos um texto apenas de descrição do time do flamengo, é necessário dizer que o Curinthia é mior.
                        </Paragraph>

                    </Card.Content>

                </Card>
            </View>





        </PaperProvider>

        //Criado nosso componente, agora vou criar uma screen para colocá-lo, planejo colocá-lo em meu HomeScreen.jsx




    )


}