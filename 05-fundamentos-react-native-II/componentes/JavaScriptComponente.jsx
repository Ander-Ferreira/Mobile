import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

export default function JavaScriptComponente() {
  const nome = "Anderson";
  const idade = 18;

  function checarIdade() {
    console.log("Chamou a função checar idade");
    if (idade >= 18) {
      return "Maior de Idade";
    } else {
      return "Menor de Idade";
    }
  }

  function alerta() {
    console.log("Chamou a função alerta");
    alert("Clicou no Botão");
  }

  return (
    <View style={styles.container}>
      <Text>JavaScriptComponente</Text>
      <Text>Nome: {nome}</Text>
      <Text>Idade: {idade}</Text>
      <Text>Idade + 40: {idade + 40}</Text>
      <Text>18+: {checarIdade()}</Text>
      <Button title="Clique" onPress={alerta}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
  },
});
