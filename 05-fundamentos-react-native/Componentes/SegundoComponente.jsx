import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Componente para ser exportado e usado em App.js

export default function SegundoComponente() {
  return (
    <View>
      <Text style={styles.textoGrande}>Segundo Componente</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textoGrande: {
    fontSize: 40,
    fontWeight: 600,
    color: "blue",
  },
});
