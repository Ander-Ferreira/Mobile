import React from "react";
import { Button, PaperProvider, Text } from "react-native-paper";

export default function ProfileScreen(props) {

    const { navigation, route } = props

    return (

        <PaperProvider>

            <Text>ProfileScreen</Text>
            <Button mode="contained" style={{marginTop:'25', marginBottom:'25'}}
                onPress={() => navigation.navigate('ConfigScreen')}>Ir para a tela de Config</Button>

            <Button mode="contained"
                onPress={() => navigation.goBack()}>Retornar</Button>


        </PaperProvider>


    )
}