import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card } from 'react-native-paper'

export default function ListaProdutos({ navigation, route }) {
    const categoria = route.params.categoria
    const [lista, setLista] = useState([])

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/category/${categoria}`)
            .then(resposta => {
                console.log(resposta.data)
                setLista(resposta.data.products)
            })
            .catch(erro => {
                alert('Erro ao buscar!')
                console.error(erro)
            })
    }, [])

    return (

       <FlatList
  data={lista}
  renderItem={({ item }) => (
    <Card onPress={() => navigation.navigate('ProdutoScreen', { produto: item })}>
      <Card.Cover source={{ uri: item.thumbnail }} />
      <Card.Content>
        <Text>{item.title}</Text>
        <Text>{item.price} Reais</Text>
      </Card.Content>
    </Card>
  )}
/>




    )
}

const styles = StyleSheet.create({})
