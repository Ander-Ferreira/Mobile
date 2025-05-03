import React from "react";
import { Button, PaperProvider, Text } from "react-native-paper";

export default function HomeScreen(props) {

    const { navigation, route } = props

    //Serve para navegar entre as telas
    console.log('NAVIGATION =>', navigation)

    //Serve para pegar os parâmetros e dados das rotas
    console.log('ROUTE =>', route)

    return (

        <PaperProvider>

            <Text>HomeScreen</Text>
            <Button mode="contained" style={{marginTop:'25'}}
                onPress={() => navigation.navigate('ProfileScreen')}>Ir para a tela de Profile</Button>

        </PaperProvider>


    )
}