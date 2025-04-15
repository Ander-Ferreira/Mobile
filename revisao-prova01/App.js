import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import JogadorScreen from './screens/JogadorScreen';


const Tab = createBottomTabNavigator()

//Veja o componente de time e siga o passo a paso

export default function App() {
  return (
    <PaperProvider>
      
      <NavigationContainer>

        
        <Tab.Navigator>
          {/* Homescreen */}
         
          <Tab.Screen 

             name='HomeScreen'
             component={HomeScreen}
             options={{
                title: 'Início',
                tabBarInactiveBackgroundColor: 'brown',
                tabBarIcon: ( {color, size} ) => <Ionicons name='home' color={color} size={size}/>

           }}    
          
          
          
          
          
          />



          {/* Jogador Screen */}

          <Tab.Screen 

          name='JogadorScreen'
          component={JogadorScreen}

          options={{
            title:'Jogadores',
            tabBarInactiveBackgroundColor: 'brown',
            tabBarIcon: ( {color, size} ) => <Ionicons name='person' color={color} size={size}/>
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
