import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import {Ionicons} from '@expo/vector-icons'
import StackRoutes from './src/route/StackRoute';


export default function App() {

   const Tab = createBottomTabNavigator()


  return (
    
    <PaperProvider>
     
      <NavigationContainer>
       
        <Tab.Navigator>
         
          <Tab.Screen
            name="Inicio"
            component={StackRoutes}
            options={{
             
              title: 'Início',
              tabBarIcon: ({ color, size }) => (
              
                <Ionicons name="home" color={color} size={size} />
              )
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
})
