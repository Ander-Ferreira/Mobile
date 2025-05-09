// Importo as screens que já criei aqui
import DetalheScreen from "../screen/DetalheScreen";
import HomeScreen from "../screen/HomeScreen";

//Importo a navegação Stack(Pilhas)
import { createStackNavigator } from "@react-navigation/stack";

//Crio minha Stack (pilha) de Navegação
const Stack = createStackNavigator()

export default function StackRoute(){
    return(
        <Stack.Navigator>
           
            {/* Dentro do meu navegador de pilhas (Stack.Navigator) virão minhas screens */}
           
            <Stack.Screen name='HomeScreen' component={HomeScreen}/>
            <Stack.Screen name='DetalheScreen' component={DetalheScreen}/>

        </Stack.Navigator>
    )
}