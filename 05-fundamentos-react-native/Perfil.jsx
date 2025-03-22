import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Perfil(props) {
     console.log(props)
     console.log(props.nome)
     console.log(props.idade)


  return (
    <View>
      <Text>Perfil:</Text>
     {/* Aqui crio os props que quero exibir lá em App.js */}
      <Text>Nome: {props.nome}</Text>
      <Text>Idade: {props.idade}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red'
    }
})