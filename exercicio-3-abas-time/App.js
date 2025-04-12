import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import EscudoScreen from './screen/EscudoScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import JogadoresScreen from './screen/JogadoresScreen';
import TituloScreen from './screen/TituloScreen';


const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>

        <Tab.Navigator>

          {/* EscudoScreen */}

          <Tab.Screen

          name='EscudoScreen'
          component={EscudoScreen}
          options={{
            title: 'Início',
            tabBarActiveBackgroundColor: 'brow',
            tabBarIcon:({color, size}) => <Ionicons name='home' color={color} size={size}/>
          }}
          
             
          
          
          />

         {/* Jogadores */}
          <Tab.Screen

          name='JogadoresScreen'
          component={JogadoresScreen}
          options={{
            title: 'Jogadores',
            tabBarActiveBackgroundColor: 'brow',
            tabBarIcon:({color, size}) => <Ionicons name='football-outline' color={color} size={size}/>

          }}
          
          
          
          
          
          
          />


          {/* TitulosScreen */}

          <Tab.Screen

          name='TituloScreen'
          component={TituloScreen}
          options={{
            title:'Titulo',
            tabBarActiveBackgroundColor: 'brow',
            tabBarIcon:({color, size}) => <Ionicons name='arrow-down-outline' color={color} size={size}/>

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
