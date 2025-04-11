import React from "react";
import { ScrollView, View } from "react-native";
import { Divider, Text } from "react-native-paper";

export default function Settings() {
    return (

        <ScrollView>
            <View style={{width:'90%'}}>

                <Text variant="titleMedium">Editar Perfil</Text>
                <Divider />
                <Text variant="titleMedium">Nova Biografia</Text>
                <Divider />
                <Text variant="titleMedium">Editar Email</Text>
                <Divider />
                <Text variant="titleMedium">Editar Avatar</Text>
                <Divider />
                <Text variant="titleMedium">Conta</Text>
                <Divider />




            </View>

        </ScrollView>


    )
}