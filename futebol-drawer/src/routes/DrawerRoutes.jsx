import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import HomeScreen from '../screens/HomeScreen'
import {Ionicons} from '@expo/vector-icons'
import TituloScreen from '../screens/TituloScreen'

const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator>
       
        <Drawer.Screen name='HomeScreen' component={HomeScreen}
        options={{
            title:'Jogadores / Clubes',
            drawerIcon: ({color, size}) => <Ionicons name='person' color={color} size={size}/>

        }}
        
        />

<Drawer.Screen name='Campeonatos' component={TituloScreen}
        options={{
            title:'Inicio',
            drawerIcon: ({color, size}) => <Ionicons name='trophy' color={color} size={size}/>

        }}
        
        />
       

    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({})