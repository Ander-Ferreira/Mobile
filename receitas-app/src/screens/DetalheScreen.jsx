import React from "react";
import { FlatList } from "react-native";
import { Card, PaperProvider } from "react-native-paper";

export default function DetalheScreen({navigation, route}){


    const receita = route.params.item



    return(

        <PaperProvider>

            <Card>

                <Card.Content>

                    <Text>Tempo de Preparo: {receita.tempoPreparo}</Text>
                    <Text>Porções: {receita.porcoes}</Text>
                    <FlatList 

                      data={receita.ingredientes}
                      renderItem={({item}) =>(

                        <Card>
                            <Card.Content>

                            <Text>{item}</Text>

                            </Card.Content>


                        </Card>


                      )}



                    />


                    <FlatList 

                    data={receita.modoPreparo}
                    renderItem={({item}) => (


                        <Card>

                            <Card.Content>

                                <Text>{item}</Text>


                            </Card.Content>


                        </Card>


                    )}
                    
                    
                    />
                    



                </Card.Content>

            </Card>


        </PaperProvider>

    )

}