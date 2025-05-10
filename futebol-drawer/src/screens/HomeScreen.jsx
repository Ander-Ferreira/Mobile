import React from "react";
import { FlatList, Text, View } from "react-native";
import { Button, Card, PaperProvider, Avatar } from "react-native-paper";

export default function HomeScreen({ navigation, route }) {

    const time = {
        nome: "Flamengo",
        escudo: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",
        fundacao: "15 de novembro de 1895",
        estadio: "Maracanã",
        mascote: "Urubu",
        cores: ["Vermelho", "Preto"]
    };
    const jogadores = [
        {
            nome: "Gabriel Barbosa",
            numero: 9,
            posicao: "Atacante",
            idade: 27,
            imagem: "https://i.pinimg.com/474x/1d/9f/5d/1d9f5de58831c9913f925a7155bdc7da.jpg"
        },
        {
            nome: "Arrascaeta",
            numero: 14,
            posicao: "Meia",
            idade: 29,
            imagem: "https://i.pinimg.com/474x/cf/ad/d9/cfadd92de5e581ac5505e3d325f8b9b2.jpg"
        },
        {
            nome: "Everton Ribeiro",
            numero: 7,
            posicao: "Meia",
            idade: 33,
            imagem: "https://i.pinimg.com/236x/39/1a/27/391a275fb7e0b018f2900f0f9fc9331b.jpg"
        },
        {
            nome: "David Luiz",
            numero: 23,
            posicao: "Zagueiro",
            idade: 35,
            imagem: "https://i.pinimg.com/474x/98/79/9b/98799b86107a87b79dc9b15cf778fa4a.jpg"
        },
        {
            nome: "Pedro",
            numero: 21,
            posicao: "Atacante",
            idade: 26,
            imagem: "https://i.pinimg.com/474x/79/e6/18/79e6185649fa3667b3ed3beef3e1ae94.jpg"
        }
    ];


    return (
        <FlatList
            data={jogadores}
            renderItem={({ item }) => (

                <Card>

                    <Card.Title tile={item.nome} />
                    <Card.Content>

                        <Card.Cover source={{ uri: item.imagem }} ></Card.Cover>
                        <Text>Numero: {item.numero}</Text>
                        <Text>Posição: {item.posicao}</Text>
                        <Text>Idade: {item.idade}</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                            <Text style={{ marginRight: 8, fontWeight: 'bold' }}>Clube:</Text>
                            <Avatar.Image size={24} source={{ uri: time.escudo }} />
                        </View>

                        <Text>Estádio: {time.estadio}</Text>
                        <Text>Mascote: {time.mascote}</Text>
                        <FlatList
                            data={time.cores}
                            renderItem={({ item }) => <Text>Cores: {item}</Text>}
                        />




                    </Card.Content>

                    <Card.Actions>

                        <Button mode='contained' onPress={() => navigation.openDrawer()} style={{ marginTop: '15', marginBottom: '15' }}>Abrir Gaveta</Button>

                        <Button mode='contained' onPress={() => {
                            navigation.openDrawer()
                            setTimeout(() => navigation.closeDrawer(), 3000)


                        }}>Fechar Automáticamente</Button>

                    </Card.Actions>


                </Card>

            )} />


    )
}