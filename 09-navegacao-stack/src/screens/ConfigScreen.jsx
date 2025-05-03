import React from "react";
import { Button, PaperProvider, Text } from "react-native-paper";

export default function ConfigScreen(props) {

    const { navigation, route } = props

    return (

        <PaperProvider>

            <Text>ConfigScreen</Text>
            <Button mode="contained" style={{marginTop:'25'}}
                onPress={() => navigation.goBack()}>Retornar</Button>

        </PaperProvider>

    )
}