import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Pessoa(props) {

    const {dados} = props

  return (
    <View style = {styles.container}>
      <Text style = {styles.texto}>Pessoa</Text>
      <Text>{props.nome}</Text>
      <Text>{props.idade}</Text>
      <Image
      
      source={props.imagem}
      
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'yellow',
        borderWidth: 10,
        padding: 10,
        
    },
    texto: {
        fontSize: 10,
        fontWeight: 600,
        
    }
})