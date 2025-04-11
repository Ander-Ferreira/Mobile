import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; //Para criar o navegador de abas inferiores
import { NavigationContainer } from '@react-navigation/native'; //Para envolver nossa estrutura de navegação
import { StatusBar } from 'expo-status-bar'; //Controla o status da nossa barra
import { StyleSheet} from 'react-native';
import { PaperProvider } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import { Ionicons } from '@expo/vector-icons'
import Perfil from './screens/Perfil';
import Settings from './screens/Settings';

const Tab = createBottomTabNavigator() //É necessário guardar a função do createBottomTabNavigator em uma variável, semelhante ao que fazemos no express

export default function App() {
  return (
   <PaperProvider>
   
    <NavigationContainer>
      
      <Tab.Navigator> 
        
        {/* HomeScreen */}
       {/* Em component faço a importação do meu component, não posso esquecer */}
       {/* em options coloco o título de minha screen e também personalizo minha tabBarIcon com ícones e até mesmo cores  */}
       {/* Cada screen nova que eu desejo colocar, preciso usar o <Tab.Screen /> */}

       {/* Importante, lembrar de não colocar comentários dentro de Tab.Screen */}
       

        <Tab.Screen  
           
           name='HomeScreen'
           component={HomeScreen} 
          
                     
           options={{
            title: 'Início',
            tabBarInactiveBackgroundColor: 'brown',
            tabBarIcon: ( {color, size} ) => <Ionicons name='home' color={color} size={size}/>

           }}      
        
        />

  {/* Perfil*/}

        <Tab.Screen

        name='Perfil'
        component={Perfil}
        options={{
          title:'Perfil',
          tabBarInactiveBackgroundColor: 'brown',
          tabBarIcon:({color, size}) => <Ionicons name='person' color={color} size={size}/>
        }}        
        
        />

        {/* Opções */}

        <Tab.Screen

        name='Settings'
        component={Settings}
        options={{
          title: 'Settings',
          tabBarInactiveBackgroundColor: 'brown',
          tabBarIcon:({color, size}) => <Ionicons name='cog' color={color} size={size} />
        }}
        
        
        
        />


      </Tab.Navigator>



    </NavigationContainer>




    </PaperProvider>
  );
}

