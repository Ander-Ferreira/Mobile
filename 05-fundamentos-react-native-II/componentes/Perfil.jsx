import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Perfil(props) {
  
  console.log(props)
  
  
    return (
    <View style = {styles.container}>
      <Text>Nome: {props.nome}</Text>
      <Text>Email: {props.email}</Text>
      <Text>Telefone: {props.telefone}</Text>
      <Text>Idade: {props.idade}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'red',
        fontSize: 20,
        fontWeight: 600
    }
})