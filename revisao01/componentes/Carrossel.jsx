import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Card, PaperProvider, Paragraph, Title, Text } from "react-native-paper";
import { Dimensions } from 'react-native'; //Importação dos dimensions para usar para fazer com que os cards preenchem a tela inteira

//Importo o paper para colocarmos a view de nossa aplicação dentro do contexto do Paper




export default function Carrossel() {

    //Agora farei um array de objetos para o meu FlatList percorrê-lo
    // Neste caso estou planejando fazer uma lista de carros com nome, imagem e ano
    // Então será um array de objetos.

    const meusCarros = [{
        nome: 'Alfa Romeo',
        ano: 1997,
        imagem: 'https://cdn.motor1.com/images/mgl/jl9oAe/s1/alfa-romeo-33-stradale.webp'
    },
    {
        nome: 'Chevette Tubarão',
        ano: 1975,
        imagem: 'https://i.pinimg.com/736x/12/fa/fc/12fafc3c8809cdcd80fcc66707d72132.jpg'
    },
    {
        nome: 'Maverick',
        ano: 1970,
        imagem: 'https://www.carrobrasil.com.br/imagem_texto/20190610_154106_img-texto.jpg'
    },
    {
        nome: 'Cobra',
        ano: 1968,
        imagem: 'https://www.autoo.com.br/fotos/2024/5/1280_960/cobra-5abre1s_22052024_78728_1280_960.jpg'
    },
    {
        nome: 'Opala',
        ano: 1987,
        imagem: 'https://reparadorsa.com.br/wp-content/uploads/2023/07/HEADER-3.jpg'
    },
    {
        nome: 'Dodge Charger',
        ano: 1979,
        imagem: 'https://erclassics.b-cdn.net/media/catalog/product/cache/2/thumbnail/1920x/17f82f742ffe127f42dca9de82fb58b1/d/o/dodge-charger-1969-d5412-042.jpg'
    }

    ]
    return (
        <PaperProvider>

            {/* Agora para percorrer meu array faço um FlatList,
           FlatList é na verdade um map que irá percorrer nosso
           array e jogando na tela o que está no array */}

            <View>
                <Text variant='headlineMedium'>Carrossel</Text>
                <FlatList

                    data={meusCarros}

                    /*Meu item irá percorrer meu array, e irá renderizar com os dados do meu array de objetos aquilo que eu escolher,
                    neste caso escolhi o componente <Card> do paper.
                    
                    Onde eu quero colocar os dados, abro chaves {} e coloco item.algo-que-esta-dentr-do-meu-array, 
                    exemplo, meu array de objetos te uma chave chamada nome, e como quero exibir o nome,
                    coloco {item.nome} onde eu quero exibir.                    
                    */

                    renderItem={({ item }) =>  <Card style={styles.card}>
                    <Card.Content>

                        <Title >{item.nome}</Title>
                        <Paragraph>{item.ano}</Paragraph>
                    </Card.Content>
                    <Card.Cover source={{ uri: item.imagem }} />
                </Card>}

               //Aqui estou mudando a posição que meus cards são exibidos, coloquei para horizontal para simular um carrossel
               horizontal = {true} />
               
            </View>
        </PaperProvider>


    )

}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

const styles = StyleSheet.create({

    //Aqui crio um estilo personalizado para meus cards
    card:{
        
        //Aqui usarei dimensions que importei do react-native, é preciso importar primeiro!

        //Pega toda a larguda da minha tela
        width: Dimensions.get('window').width,
        //Vai pegar altura da minha tela
        height: Dimensions.get('window').height

    },



    textoGrand: {
        fontSize: 20,
        alignItems: 'center'





    }


})