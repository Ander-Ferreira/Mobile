import React from "react";
import { FlatList } from "react-native";
import { Button, Card, PaperProvider, Text } from "react-native-paper";

export default function DetalheScreen({ navigation, route }) {

    //Construo uma rota usando como parâmetro o item que iremos passar em minha screen/HomeScreen
    const reqReceita = route.params.item


    return (
        <PaperProvider>
            <Card>
                <Card.Title title={`Tempo de Preparo: ${reqReceita.tempoPreparo}` } titleStyle={{fontWeight:'bold'}} />

                <Card.Content>
                    <Text>Porções: {reqReceita.porcoes}</Text>

                    {/* Note que como temos uma lista de ingredientes (array) dentro deste array que estamos usando,
                    preciso usar um FlatList */}

                    <Text style={{fontWeight:'bold', marginTop:'5px', marginTop:'5px'}}>Modo de Preparo:</Text>
                    <FlatList
                        data={reqReceita.ingredientes}
                        renderItem={({ item }) => (

                            <Text>{item}</Text>
                        )}

                    />
                   
                    <Text style={{fontWeight:'bold', marginTop:'5px', marginTop:'5px'}}>Ingredientes:</Text>

                    {/* Para a lista de modoPreparo repito o mesmo processo */}
                    <FlatList 
                    data={reqReceita.ingredientes}
                    renderItem={({ item }) => (

                        <Text>{item}</Text>
                    )}
                    />

                </Card.Content>

                <Card.Actions>
                    {/* Botão para retornar para a minha HomeScreen */}
                    
                    <Button mode="contained" onPress={() => navigation.goBack()} icon='arrow-left'>Voltar</Button>
                </Card.Actions>
            </Card>

        </PaperProvider>
    )
}