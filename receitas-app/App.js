import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { PaperProvider } from 'react-native-paper';
import StackRoute from './src/route/StackRoute';
import { SafeAreaView, StyleSheet } from 'react-native';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <StackRoute />
        </SafeAreaView>
      </NavigationContainer>
    </PaperProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})