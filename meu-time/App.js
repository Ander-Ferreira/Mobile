import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView, Image } from 'react-native';

export default function App() {

  function gol(){
    alert('GOOOOL do DIDAAAA!')
  }




  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.textoEstilizado}>Bob Shawton</Text>
      <Image source={require('./imagens/bob.webp')}></Image>
      <Text style={styles.textoEstilizado}>Ronaldinho</Text>
      <Image source={require('./imagens/ronaldinho.jpg')}></Image>
      <Text style={styles.textoEstilizado}>Dida</Text>
      <Image source={require('./imagens/dida.webp')}></Image>
      <Text style={styles.textoEstilizado}>Cafu</Text>
      <Image source={require('./imagens/cafu.webp')}></Image>
      <Text style={styles.textoEstilizado}>Ronaldo</Text>
      <Image source={require('./imagens/ronaldo.webp')}></Image>
      <Button title='clique' onPress={gol}></Button>

      <StatusBar style="auto" />
      
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoEstilizado:{
    fontFamily: 'normal',
    fontStyle:'italic',
    fontSize: 50,
    color:'#00FF7F'
  }
});
