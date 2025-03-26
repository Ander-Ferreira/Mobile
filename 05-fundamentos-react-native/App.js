import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './Componentes/PrimeiroComponente';
import SegundoComponente from './Componentes/SegundoComponente';
import TerceiroComponente from './Componentes/TerceiroComponente';
import JavaScriptComponente from './JavaScriptComponente';
import Perfil from './Perfil';


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
      {/* Importando meu Quarto Componente de Componentes/JavaScriptComponente */}
      <JavaScriptComponente></JavaScriptComponente>
      {/* Importando meu Quinto Componente de Componentes/Perfil */}
      
      <Perfil
      // Aqui estou usando o props que criei lá no meu componente de Perfil, ele me permite criar propriedades aqui
      nome = 'Anderson'
      idade = {20}
      
      
      
      />

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
