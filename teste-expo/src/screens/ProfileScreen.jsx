import React from "react";
import { Button, PaperProvider, Text } from "react-native-paper";

export default function ProfileScreen(props){

    const {navigation, route} = props

    return(
        <PaperProvider>

            <Text>Profile Screen</Text>
            <Button mode="contained" onPress={() => navigation.navigate('ConfigScreen')}> Config </Button>
            <Button mode="contained" onPress={() => navigation.goBack()}> Voltar </Button>


        </PaperProvider>


    )
}