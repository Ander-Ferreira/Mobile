import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card } from 'react-native-paper'


// https://dummyjson.com/products/category-list

export default function HomeScreen({navigation, route}) {

    const [categoria, setCategoria] = useState([])
    
//Monto minha requisição, ativar toda vez que um usuário entrar na tela

useEffect(() => {
  axios.get('https://dummyjson.com/products/category-list')
    .then(resposta => {
      console.log(resposta.data)
      setCategoria(resposta.data)
    })
    .catch(erro => {
      console.log(erro)
    })
}, [])


  return (
    <FlatList
    data={categoria}
    renderItem={( {item} ) => (
        <Card style={{ margin: 8 }}
            onPress={() => navigation.navigate('ListaProdutos', { categoria: item })}> 
            <Card.Content>
                <Text>{item}</Text>
            </Card.Content>
        </Card>
    )}/>
  )
}

const styles = StyleSheet.create({})