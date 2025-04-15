import React from "react";
import { View } from "react-native";
import { PaperProvider } from "react-native-paper";
import Time from "../componentes/Time";

//Será nesta tela que irei usar o componente de time que criei
//Como estaremos usando um objeto para puxar nossos dados, estarei colocando nesta página para facilitar e não precisarmos importá-lo de outro lugar



export default function HomeScreen(){


    const time = {
        nome: "Flamengo",
        escudo: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",
        };

    return(

        <PaperProvider>

            {/* Não esqueça de alinha sua view, senão os textos não podem aparecer */}
            
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>

                {/* Agora vamos puxar nossos dados */}

                <Time

                    nome = {time.nome}
                    escudo = {time.escudo}            
                
                
                
                />



                


            </View>




        </PaperProvider>



    )



}

// Feito nossa screen, agora só basta direcioná-la em nosso App.js