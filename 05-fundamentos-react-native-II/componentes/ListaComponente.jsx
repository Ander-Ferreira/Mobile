import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ListaComponente() {
  const lista = ["Uva", "Maçã", "Banana", "Laranja"];
  return (
    <View style={styles.container}>
      <Text>ListaComponente</Text>
      {lista.map((fruta) => (
        <Text style={styles.texto}>{fruta}</Text>
      ))}

      {/* Segunda forma de fazer, com mais de uma linha de código */}

      {lista.map((fruta) => {
        return (
          <View>
            <Text>{fruta}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
  },
  texto: {
    fontSize: 20,
    fontWeight: 600,
  },
});
