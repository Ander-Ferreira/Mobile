import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Card, Paragraph, Text, Title } from 'react-native-paper'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text variant='headlineLarge' style={{alignItems:'center'}}>Tela Inicial</Text>
      <Card>

        <Card.Content>
            <Title></Title>
                <Paragraph>Algum texto para preencher a imagem</Paragraph>
            
        </Card.Content>

        <Card.Cover source={{uri: 'https://picsum.photos/700'}}/>


      </Card>

      <Card>

        <Card.Content>
            <Title></Title>
                <Paragraph>Algum texto para preencher a imagem</Paragraph>
            
        </Card.Content>

        <Card.Cover source={{uri: 'https://picsum.photos/700'}}/>


      </Card>

      <Card>

        <Card.Content>
            <Title></Title>
                <Paragraph>Algum texto para preencher a imagem</Paragraph>
            
        </Card.Content>

        <Card.Cover source={{uri: 'https://picsum.photos/700'}}/>


      </Card>

      <Card>

        <Card.Content>
            <Title></Title>
                <Paragraph>Algum texto para preencher espaço</Paragraph>
            
        </Card.Content>

        <Card.Cover source={{uri: 'https://picsum.photos/700'}}/>


      </Card>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        paddingTop: 10
        
    }
})
