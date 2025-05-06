import React from "react";

//Importação das minhas screens

import HomeScreen from "../screens/HomeScreen";

//Importação do navigate
import {createStackNavigator} from "@react-navigation/stack"
import ProfileScreen from "../screens/ProfileScreen";
import ConfigScreen from "../screens/ConfigScreen";

//Criação de nossa pilha
const Stack = createStackNavigator()


export default function StackRoute(){

    return(
        <Stack.Navigator>

            <Stack.Screen 

            name = 'HomeScreen'
            component={HomeScreen}
            options={{
                title:'Início',
                headerTitleAlign:'center'
            }}
            
            
            />

            <Stack.Screen 
            name='ProfileScreen'
            component={ProfileScreen}
            options={{
                title:'Perfil',
                headerTitleAlign:'center'
            }}
            />

            <Stack.Screen 
            name='ConfigScreen'
            component={ConfigScreen}
            options={{
                title:'Configuração',
                headerTitleAlign:'center'
                
            }}
            
            />


           

           

        </Stack.Navigator>

    )
}