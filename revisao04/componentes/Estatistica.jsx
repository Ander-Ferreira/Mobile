import React from "react";
import { Button, Card, PaperProvider, Text } from "react-native-paper";
import { Ionicons } from '@expo/vector-icons'

export default function Estatistica(){

   
    const estatisticas = {
        totalPublico: 3404252,
        totalJogos: 64,
        totalGols: 172,
        totalCartoes: 301,
        totalCartoesAmarelos: 288,
        totalCartoesVermelhos: 13,
        totalEstadios: 8,
        totalSelecoes: 32,
        totalJogadores: 831
        };
    
        function mediaGols(){
    
          const totaldegols = estatisticas.totalGols
          
          const totaldejogos = estatisticas.totalJogos
    
          const media = totaldegols / totaldejogos
    
          return media
    
    
    
    
    
    
    
    
        }
    
        function mediaPublico(){
    
          const totaldepublico = estatisticas.totalPublico
    
          const totaldejogos = estatisticas.totalJogos
    
          const media = totaldepublico / totaldejogos
    
          return media
    
    
        }
    
    
        function mediaCartoes(){
    
          const totalAmarelos = estatisticas.totalCartoesAmarelos
          const totalVermelhos = estatisticas.totalCartoesVermelhos
          const media = totalAmarelos / totalVermelhos
    
          return media
    
    
    
        }
   
   
   
   


   

    return(

        <PaperProvider>

<Card>

<Card.Title style={{backgroundColor:'grey'}} titleStyle={{color:'white', textAlign:'center'}} title='Dados' />

<Card.Content style={{alignItems:'center', backgroundColor:'yellow'}} title='Números' titleStyle={{color:'white'}}>
  <Text style={{color:'green'}}>Total de Gols: {estatisticas.totalGols}</Text>
  <Text style={{color:'green'}}>Total de Jogos: {estatisticas.totalJogos}</Text>
  <Text style={{color:'green'}}>Total de Público: {estatisticas.totalPublico}</Text>  

  
  
  </Card.Content>

<Card>

<Card.Content style={{alignItems:'center', backgroundColor:'green', height:'100%'}}>
<Button style={{width:'200', height:'50', marginBottom: 10, marginTop: 10}} icon={()=> <Ionicons name="football-outline" size={20} color="white" />} mode="contained" onPress={() => alert(mediaGols().toFixed(2))}>
    Media de Gols

   </Button> 

   <Button style={{width:'200', height:'50', marginBottom:10, marginTop:10}} icon={()=> <Ionicons name="id-card-outline" size={20} color="white" />} mode="contained" onPress={() => alert(mediaCartoes().toFixed(2))}>
    Media de Cartões

   </Button> 

   <Button style={{width:'200', height:'50', marginBottom:10, marginTop:10}} icon={()=> <Ionicons name="accessibility-outline" size={20} color="white" />} mode="contained" onPress={() => alert(mediaPublico().toFixed(1))}>
    Media de Público

   </Button> 

   </Card.Content>

</Card>
 





</Card>


        </PaperProvider>

        



    )


}