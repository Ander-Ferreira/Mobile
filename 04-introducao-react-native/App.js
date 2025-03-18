//Imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';

//Função que compõe os componentes
//Retorna o que vai ser renderizado na tela (Template feito JSX)

const nome = 'Anderson'
export default function App() {

//Lógica do meu componente

function alerta(){
  alert("Clicou no botão")
}

//Retorno com o jsx
return (
  
  // Scroll view permite que o conteúdo vá até depois da barra de rolagem
  //Não pode ser usado sozinho, tem que ter uma view dentro
  //Ele só enviar o conteúdo, precisa de ter algo dentro, exemplo, a View
  
    <ScrollView>
    <View style={styles.container}>
    
      <Text>Hello World! APP PRA</Text>
    
      <Text>{2+2}</Text> 

      <Text>{nome}</Text> 

      <Text style={styles.textoGrande}>
        {/*Aqui peguei um style personalizado que criei lá em baixo*/}
        Estilo Personalizado
        </Text> 

      {/* Botão sempre precisa de um título */}
      
      <Button title='Clicar' onPress={alerta}></Button>

      {/* <StatusBar style="auto"/> */}
      <Text style={{fontSize:50, fontStyle:'italic'}}>Algum texto</Text>

      <Image source={{
        uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG"
      }}
      style={{
        height: 400,
        width: 400
      }}
      
      />

<Image source={require('./imagens/moto.jpg')}
      style={{
        height: 400,
        width: 400
      }}
      
      />
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
  textoGrande:{
    fontSize:40,
    color:'#000'
  }
});
