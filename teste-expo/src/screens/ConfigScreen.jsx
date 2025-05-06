import React from "react";
import { Button, PaperProvider, Text } from "react-native-paper";

export default function ConfigScreen(props){
   
   const {navigation, route} = props
   
    return(

        <PaperProvider>

            <Text> Config Screen </Text>
            <Button mode="contained" onPress={() => navigation.goBack()}> Voltar </Button>




        </PaperProvider>


    )
}