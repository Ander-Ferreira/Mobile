import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './Componentes/PrimeiroComponente';
import SegundoComponente from './Componentes/SegundoComponente';
import TerceiroComponente from './Componentes/TerceiroComponente';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
     {/* Primeiro Componente importado de Componentes/PrimeiroComponente */}
      <PrimeiroComponente></PrimeiroComponente>
      {/* Importando meu segundo Componente de Componentes/SegundoComponente */}
      <SegundoComponente></SegundoComponente>
      {/* Importando meu terceiro Componente de Componentes/SegundoComponente */}
      <TerceiroComponente></TerceiroComponente>

      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
