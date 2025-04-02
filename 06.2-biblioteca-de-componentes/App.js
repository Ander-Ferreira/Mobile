import { StatusBar } from 'expo-status-bar';
import { PaperProvider} from 'react-native-paper';
import { FlatList, StyleSheet, Text, View, Card, Paragraph } from 'react-native';
import CardContent from 'react-native-paper/lib/typescript/components/Card/CardContent';

//Flatlist

export default function App() {

  const lista = ['uva', 'maça', 'pera', 'morango']

  const lista2 = [
    { titulo: 'Algo',
    paragrafo: 'Algo escrito',
    imagem: 'https://i.pinimg.com/originals/83/82/45/8382459eeae8d107e6fb2be8cbdb8de6.jpg'
  },
  { titulo: 'Algo',
    paragrafo: 'Algo escrito',
    imagem: 'https://i.pinimg.com/originals/06/8f/d4/068fd4c47c7b95dca6f334c047825f27.jpg'
  },
  { titulo: 'Algo',
    paragrafo: 'Algo escrito',
    imagem: 'https://i.pinimg.com/originals/86/60/23/866023d08696bad9c07fff6c6d426e59.jpg'
  }

  ]

  return (
    <PaperProvider>
    {/* O flat list é um map só que mais inteligente */}

    <FlatList
    data = {lista}
    renderItem={({item}) => <Text>{item}</Text>}>

    </FlatList>

    <FlatList
    data = {lista2}
    renderItem={({item}) => <Card> 
      <CardContent>
      <Text>{item.titulo}</Text>
      <Paragraph>{item.paragrafo}</Paragraph>
       </CardContent>
       <Card.Cover source={{ uri: item.imagem }}/>
    </Card>}>

    </FlatList>

    

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
