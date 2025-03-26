import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import PrimeiroComponente from "./componentes/PrimeiroComponente";
import JavaScriptComponente from "./componentes/JavaScriptComponente";
import Perfil from "./componentes/Perfil";
import ListaComponente from "./componentes/ListaComponente";
import Pessoa from "./componentes/Pessoa";

export default function App() {
  const lista = [
    {
      nome: "Neymar",
      idade: "33",
      imagem:
        "https://cdn1.unitedinfocus.com/uploads/14/2023/05/GettyImages-1426663483-scaled.jpg",
    },
    {
      nome: "Neymar",
      idade: "33",
      imagem:
        "https://cdn1.unitedinfocus.com/uploads/14/2023/05/GettyImages-1426663483-scaled.jpg",
    },
    {
      nome: "Neymar",
      idade: "33",
      imagem:
        "https://cdn1.unitedinfocus.com/uploads/14/2023/05/GettyImages-1426663483-scaled.jpg",
    },
  ];
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Open up App.js to start working on your app!</Text>

      <PrimeiroComponente></PrimeiroComponente>
      <JavaScriptComponente></JavaScriptComponente>

      {/* <Perfil
        //  Aqui passo as propriedades do props que Criei lá em perfil, props.nome, props.email, props.idade, props.telefone
        nome="Anderson"
        email="email@email.com"
        idade="16"
        telefone="33763180"
      />
      */}

      <ListaComponente />

      <Pessoa
        dados={{
          nome: "Neymar",
          idade: "33",
          imagem:
            "https://cdn1.unitedinfocus.com/uploads/14/2023/05/GettyImages-1426663483-scaled.jpg",
        }}
      />

      {lista.map(
        (jogador) => {
          return(
            <Pessoa
            dados = {jogador}  
            />
          )
        }
      )}


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
