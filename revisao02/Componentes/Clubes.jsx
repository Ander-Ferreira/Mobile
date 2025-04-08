import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Card, PaperProvider, Paragraph, Text, Title } from "react-native-paper";
import Jogadores from "./Jogadores";

export default function Clubes(props) {

    //Agora descontruo as chaves do array que está presente em App.js e transformo em props
    //Ao transformar em props poderei exibir diferentes valores das chaves
    //O que será necessário, já que o plano é rodar um loop para exibir todos os times do array lá em meu App.js


    const { nome, anoFundacao, mascote, imagem, jogadores } = props



    return (

       
            <View style={styles.container}>

                
                <Card style={{ margin: 10 }}>
                    <Card.Content>
                        {/* Parte de cima do meu card */}
                        <Title>{nome}</Title>


                    </Card.Content>

                    <Card.Cover source={{ uri: imagem }} />

                    {/* Parte baixa do meu card */}

                    <Paragraph>Ano: {anoFundacao}</Paragraph>
                    <Paragraph>Mascote: {mascote}</Paragraph>
                    
                    {/* Aqui vem o Componente de jogadores, colocaremos o componente de jogadores
                    dentro deste componente e faremos um FlatList nele */}

                    <FlatList 

                    horizontal

                    //Agora irei pegar o array de jogadores para listar os jogadores
                    //Note que este é um array dentro de um array de objetos, então pegarei apenas o array de jogadores, ao invés do array de times completo.

                    data={jogadores}


                    renderItem={( {item} ) => (
                       
                        // Agora importo nosso componente de jogadores que está com os avatares dos jogadores já feito

                        <Jogadores 

                        nome = {item.nome}
                        numero = {item.numero}
                        imagem = {item.imagem}                     
                        
                        
                        
                        />



                    )
                    
                    
                    
                    
                    
                    
                    }
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    />





                </Card>

            </View>
        
    )

}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    }






})