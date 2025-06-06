import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from '../screens/HomeScreen';
import GeradorScreen from '../screens/GeradorScreen';

//Stack para navegarmos
const Stack = createStackNavigator()

export default function StackRoutes() {
  return (
   
   <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: 'Início', headerTitleAlign: 'center' }}
      />

      <Stack.Screen
        name="GeradorScreen"
        component={GeradorScreen}
        options={{ title: 'Pagamento', headerTitleAlign: 'center' }}
      />
    </Stack.Navigator>
  )
}
