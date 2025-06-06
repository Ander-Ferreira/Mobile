import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Card, Text } from 'react-native-paper'


 //Para não fazer um array de produtos na mão
 
 //Vou pegar os produtos da API dummyjson, aqui não tem nada de especial galera
 
 //Só dar uma olhada na aula de navegação Stack do professor


   

export default function HomeScreen({navigation, route}) {

 const [produtos, setProdutos] = useState([]) 

 useEffect(() => {
  axios.get('https://dummyjson.com/products')
  .then(resposta => {
    // console.log(resposta.data.products)
    setProdutos(resposta.data.products)
  })
  .catch(erro => {
    console.log(erro)
  })
  
 }, [])
  
  return (
   
  
    <FlatList
    data={ produtos }
    renderItem={ ( { item } ) => (

        <Card style={ styles.cardStyle }>

          <Card.Title title={ item.title } />
         
                    
            <Card.Content>

            <Text>{ item.description }</Text>
           
            <Text>Preço: R${ item.price }</Text>
            
          </Card.Content>

          
          <Card.Cover style={ { height:450  } } source={ { uri: item.images[0] } } />

         {/* Meu botão vai me direcionar para minha Stack GeradorScreen já com os dados do produto que vou querer */}

         {/* Estando em meu GeradorScreen, fica mamão com açúcar montar nosso pdf com as informações que já temos, bora lá! */}

          <Button mode='contained' onPress={() => navigation.navigate('GeradorScreen', {gerador: item})}>Comprar</Button>


        </Card>

    ) }
    
    />
  )
}

const styles = StyleSheet.create({
  cardStyle:{
    marginTop: 8,
    marginBottom: 8
  }
})