import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import StackRoute from './src/route/StackRoute';


 //Passo 01 - Fazer screen - exemplo: screen/HomeScreen
 //Passo 02 - Fazer minhas rotas route/StackRoute
 //Passo 03 - Volto para App.js (AQUI), construo minha navegação e chamo meu arquivo de rotas (StackRoute)

 //Repita os passos 01 e 02 caso tenha mais de uma screen, qualquer dúvida me procure no discord, whatsapp ou email.



export default function App() {
 
  
  return (
    <PaperProvider>

      <NavigationContainer>
        
        <StackRoute></StackRoute>


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
