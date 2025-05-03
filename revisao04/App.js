import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import HomeScreen from './screen/HomeScreen';
import { Ionicons } from '@expo/vector-icons'
import EstadioScreen from './screen/EstadioScreen';
import JogadorScreen from './screen/JogadorScreen';
import EstatisticaScreen from './screen/EstatisticaScreen';


const Tab = createBottomTabNavigator()

export default function App() {
  return (

    <PaperProvider>

      <NavigationContainer>

        <Tab.Navigator>

          {/* Aqui vem minha home */}

          <Tab.Screen

          name = 'HomeScreen'
          component={HomeScreen}
          options={{
            title: 'Home',
             headerTitleAlign: 'center',
            tabBarInactiveBackgroundColor: 'brown',
            tabBarIcon: ({color, size}) => <Ionicons name='home' color={color} size={size}/>

          }}

          
          />

          {/* Aqui vem minha tela de estádios */}

          <Tab.Screen 
          name= 'EstadioScreen'
          component={EstadioScreen}
          options={{
            title: 'Estadios',
            headerTitleAlign: 'center',
            tabBarInactiveBackgroundColor: 'brown',
            tabBarIcon: ({color, size}) => <Ionicons name='shield-outline' color={color} size={size}/>

          }} 
          
          />

            {/* Aqui vem minha tela de Jogador/Comissão*/}
            <Tab.Screen 

            name='JogadorScreen'
            component={JogadorScreen}
            options={{
              title:'Jogadores',
              headerTitleAlign: 'center',
              tabBarInactiveBackgroundColor: 'brown',
              tabBarIcon: ({color, size}) => <Ionicons name='person' color={color} size={size}/>
            }}


            
            
            />

            {/* Minha tela de estatísticas */}

            <Tab.Screen
             name='EstatisticaScreen'
             component={EstatisticaScreen}
             options={{
               title:'Estatistica',
               headerTitleAlign: 'center',
               tabBarInactiveBackgroundColor: 'brown',
               tabBarIcon: ({color, size}) => <Ionicons name='stats-chart-outline' color={color} size={size}/>
             }}
 
            
            
            />

            







          
        </Tab.Navigator>


      </NavigationContainer>

    </PaperProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
