import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// Minhas importações de telas
import HomeScreen from '../screens/HomeScreen'
import ListaProdutos from '../screens/ListaProdutos'
import ProdutoScreen from '../screens/ProdutoScreen'
import { createStackNavigator } from '@react-navigation/stack'

export default function StackRoutes() {

    //Agora crio o meu stack
    const Stack = createStackNavigator() 
  
  
    return (
   
   <Stack.Navigator>

    <Stack.Screen 
    name='HomeScreen'
    component={HomeScreen}
    options={{
        title:'Página Inicial',
        headerTitleAlign:'center'
    }}/>

    <Stack.Screen
    name='ListaProdutos'
    component={ListaProdutos}
    options={{
        title:'Lista de Produtos',
        headerTitleAlign:'center'

    }}/>

    <Stack.Screen
    name='ProdutoScreen'
    component={ProdutoScreen}
    options={{
        title:'Produtos',
        headerTitleAlign:'center'
    }}/>

    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})