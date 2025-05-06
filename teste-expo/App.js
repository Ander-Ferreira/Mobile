import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import StackRoute from './src/routes/StackRoute';

export default function App() {
  return (
    <PaperProvider>

      <NavigationContainer>

        {/* Minhas Rotas com Minhas Screens */}
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
