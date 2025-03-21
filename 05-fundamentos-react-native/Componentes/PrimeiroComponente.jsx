import React from "react";
import { Text, View, StyleSheet } from "react-native";

// Componente para ser exportado e usado em App.js

export default function PrimeiroComponente() {
  
  
   return (
    <View>
      <Text style = {styles.textoGrande}>Primeiro Componente</Text>
    </View>
  );
}

// Criando meus estilos
const styles = StyleSheet.create({
    textoGrande: {
        fontSize: 40,
        fontWeight: 600
    }


})
