import React from "react";
import { FlatList, Text, View } from "react-native";
import { Button, Card, PaperProvider, Avatar } from "react-native-paper";


export default function TituloScreen() {

    const titulos = [
        {
            nome: "Campeonato Brasileiro",
            anos: [1980, 1982, 1983, 1992, 2009, 2019, 2020]
        },
        {
            nome: "Copa Libertadores da América",
            anos: [1981, 2019, 2022]
        },
        {
            nome: "Copa do Brasil",
            anos: [1990, 2006, 2013, 2022, 2024]
        },
        {
            nome: "Supercopa do Brasil",
            anos: [2020, 2021, 2025]
        }
    ];

    return (
        <View>
            <FlatList
                data={titulos}
                renderItem={({ item }) => (
                    <Card>
                        <Card.Title title={item.nome}></Card.Title>
                        <Text style={{fontWeight:'bold'}}>Anos:</Text>
                        <FlatList
                            data={item.anos}
                            renderItem={({ item }) => (
                                <Text>{item}</Text>
                            )}
                        />
                    </Card>
                )} />

        </View>



    )
}