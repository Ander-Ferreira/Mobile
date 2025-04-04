import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import Carrossel from './componentes/Carrossel';

export default function App() {
  return (
   <PaperProvider>
   <View style={styles.container}>
      <Text>Testando</Text>
      <Carrossel></Carrossel>
      <StatusBar style="auto" />
    </View>
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
