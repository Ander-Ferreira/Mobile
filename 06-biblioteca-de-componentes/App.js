import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { PaperProvider, Card, Title, Paragraph, Divider, Button } from "react-native-paper";

//Estamos trabalhando com a biblioteca paper
//Paper é meio que um bootstrap, só que para mobile
//Veja mais em https://callstack.github.io/react-native-paper

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text></Text>
        <Card>
          <Card.Content>
            <Title variant = 'titleLarge'>
              O título do meu card
              </Title>
              <Text>Texto para ser divido</Text>
              <Divider/>
              <Text>Texto para ser divido</Text>
              <Divider/>
              <Text>Texto para ser divido</Text>
              <Paragraph>
                Um paragrafo qualquer para testes
              </Paragraph>
            
          </Card.Content>
          <Card.Cover source={{uri: 'https://th.bing.com/th/id/OIP.JHPS7mXgDOdLTXPB2EyOYAEsC7?rs=1&pid=ImgDetMain'}}></Card.Cover>
          <Button icon="camera" mode="contained-tonal" onPress={() => console.log('Pressed')}>
   Aperte-me
  </Button>     
        </Card>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
