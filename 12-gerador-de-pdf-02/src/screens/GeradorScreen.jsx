import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Button, Text, TextInput} from 'react-native-paper';

//Minha importação de print de pdf
import { printToFileAsync  } from 'expo-print';

//Minha importação para compartilhar o pdf
import { shareAsync } from 'expo-sharing'; 

export default function GeradorScreen({navigation, route}) {

  const produto = route.params.gerador;
   
  
   //Construção do meu pdf, vamos construir com html!

    const html = `
   
   <html> 

     <body> 
        
        <h1 style="color: red"> Produto: ${produto.title} </h1>
        <h2>${produto.description}</h2>
        <h1>Preço a Pagar R$ ${produto.price}</h2>
        <img src='https://images.squarespace-cdn.com/content/v1/5d3f241fa4e0350001fa20d5/1636491460338-AIZAXV2978MGIDQE0GT7/qr-code.png?format=2500w'/>
     
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
            
       {/* No meu botão coloco a função de gerarPDF */}
        <Button mode='contained' onPress={gerarPDF}>Gerar Fatura PDF</Button>
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

//Você pode combar isso com leitor de Qr-code e criar um sisteminha de pagamento massa! https://github.com/Ander-Ferreira/Mobile/tree/main/10-Qr-code-exemplo
