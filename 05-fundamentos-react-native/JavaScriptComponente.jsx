import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function JavaScriptComponente() {


    const nome = 'Anderson'
    const idade = 16

    
    
    // Minha lógica para checar maioridade

    function checkMaiorIdade(){
        if(idade >= 18){
            return "Maior idade"
        } else{
            return "Menor idade"
        }

    }

    function alerta (){
        alert('clicou no botão')
    }



  return (
    <View>
      <Text>JavaScriptComponente</Text>
      <Text>NOME: {nome}</Text>
      <Text>IDADE: {idade}</Text>
      <Text>IDADE + 40: {idade + 40}</Text>
      {/* Chamo minha função aqui de checkMaiorIdade */}
      <Text>É MAIOR DE IDADE? {checkMaiorIdade(idade)}</Text>
      {/* Checagem com ternário, se for maior que 18 retorna 18+, se for menor retorna 18- */}
      <Text>{idade >= 18 ? "18+" : "18-"}</Text>

      {/* O botão precisa ter título, senão dará erro */}
      <Button title='Clique' onPress={alerta}></Button>
    </View>
  )
}

const styles = StyleSheet.create({})