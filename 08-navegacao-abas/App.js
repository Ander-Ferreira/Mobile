import { StatusBar } from 'expo-status-bar';
import { PaperProvider, Text } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import {Ionicons} from '@expo/vector-icons'
const Tab = createBottomTabNavigator()

export default function App() {

 
  return (
    <PaperProvider>
      <NavigationContainer>

        <Tab.Navigator>
             {/* Apontamento do HomeScreen */}
          <Tab.Screen  name='HomeScreen' 
          component={HomeScreen}
          options={{
            title:'Inicio',
            headerTitleAlign: 'center',
            headerStyle:{
              backgroundColor: 'blue'
            },
            tabBarInactiveBackgroundColor: 'yellow',
            tabBarActiveBackgroundColor:'',
            tabBarIcon: ({color, size}) => <Ionicons name='home' color={color} size={size} />
            
          }} />

          {/* Apontamento do ProfileScreen */}
          <Tab.Screen name='ProfileScreen' 
          component={ProfileScreen}
          options={{
            title:'Profile',
            headerTitleAlign: 'center',
            headerStyle:{
              backgroundColor: 'blue'
            },
            tabBarInactiveBackgroundColor: 'yellow',
            tabBarActiveBackgroundColor:'',
            tabBarIcon: ({color, size}) => <Ionicons name='person' color={color} size={size} />
            
          }}
          
          />
          
          {/*Apontamento do SettingsScreen */}
          <Tab.Screen name='SettingsScreen' 
          component={SettingsScreen}
          options={{
            title:'Settings',
            headerTitleAlign: 'center',
            headerStyle:{
              backgroundColor: 'blue'
            },
            tabBarInactiveBackgroundColor: 'yellow',
            tabBarActiveBackgroundColor:'',
            tabBarIcon: ({color, size}) => <Ionicons name='cog' color={color} size={size} />
            
          }}/>

        </Tab.Navigator>

      </NavigationContainer>

    </PaperProvider>
    
  );
}

