import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// Componente criado com a extensão do vs code es7 React do dsznajder, opção selecionada rnfs, isso é um snippet

// Componente para ser exportado e usado em App.js

export default function TerceiroComponente() {
  return (
    <View>
      <Text style = {styles.textoGrande}>TerceiroComponente</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    textoGrande:{
        fontSize: 20,
        fontWeight: 600,
        color: 'red'
    }
})