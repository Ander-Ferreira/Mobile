//Imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

//Função que compõe os componentes
//Retorna o que vai ser renderizado na tela (Template feito JSX)
export default function App() {

//Lógica do meu componente

function alerta(){
  alert("Clicou no botão")
}

//Retorno com o jsx
return (
    <View style={styles.container}>
      <Text>Hello World! APP PRA</Text>
    
      <Text>{2+2}</Text> 
    
      <Button title='Clicar' onPress={alerta}></Button>

      <StatusBar style="auto"/>

      <Image source={{
        uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG"
      }}
      style={{
        height: 400,
        width: 400
      }}
      />
    </View>
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
