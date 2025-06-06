import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Button, Text, TextInput} from 'react-native-paper';
import { useState } from 'react'

//Minha importação de print de pdf
import { printToFileAsync  } from 'expo-print';

//Minha importação para compartilhar o pdf
import { shareAsync } from 'expo-sharing'; 

export default function App() {
   
   let [nome, setNome] = useState("")


   //Construção do meu pdf, vamos construir com html!

   const html = `
   
   <html> 

     <body> 
        
        <h1> Olá! ${nome} </h1>
     
     </body>
   
   
   </html>`

   //Com o meu pdf construído, agora preciso de uma função para gerá-lo!

   let gerarPDF = async function(){

    const file = await printToFileAsync( 
      
     //Opções, posso escolher se quero em html e base64
      {
    
      html: html,
      base64: false

    } 
  
  )

  //Por último vou compartilhar o arquivo usando a uri do arquivo
  await shareAsync(file.uri)

   }


  return (
    <View style={styles.container}>
      <TextInput value={nome} placeholder='Nome' style={ styles.textInput } onChangeText={ ( value ) => setNome( value ) }/>
       
       {/* No meu botão coloco a função de gerarPDF */}
        <Button mode='contained' onPress={gerarPDF}>Gerar PDF</Button>
      <StatusBar style="auto" />
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
  textInput: {
    alignSelf: 'stretch',
    marginBottom: 8

  }
});
