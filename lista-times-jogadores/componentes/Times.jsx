import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import { Card, Text } from 'react-native-paper'
import Jogadores from './Jogadores'



export default function Times(props) {

    const {  
    nome,
    anoFundacao,
    mascote,
    imagem,
    jogadores} = props
    
  return (
    <Card style={{ margin: 10 }}>
      <Card.Title title={nome} subtitle={jogadores} />
      <Card.Content>
        <Text>{anoFundacao}</Text>
      </Card.Content>
      <Card.Cover source={{ uri: imagem }} />
      <Card.Actions>
        <FlatList
          horizontal
          data={jogadores}
          renderItem={({ item }) => (
            <Jogadores
              nome={item.nome}
              imagem={item.imagem}
              numero={item.numero}
            />
          )}
        />
      </Card.Actions>
    </Card>
  )
}

const styles = StyleSheet.create({})