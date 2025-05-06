import React from "react";
import { Button, PaperProvider, Text } from "react-native-paper";

export default function HomeScreen(props){

    const {navigation, route} = props

    return(

        <PaperProvider>

            <Text>Home Screen</Text>
           
            <Button
            mode="contained"
            style={{marginTop:'25px'}}
            onPress={() => navigation.navigate('ProfileScreen')}>  Ir para Profile  </Button>
            <Button mode="contained" onPress={() => navigation.goBack()}> Voltar </Button>

        </PaperProvider>
      
            


    )
}