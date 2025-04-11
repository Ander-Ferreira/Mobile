import React from "react";
import { ScrollView, View } from "react-native";
import { Avatar, Card, Paragraph, Text } from "react-native-paper";

export default function Perfil(){
    return(
       <ScrollView>
       <View style={{alignItems:'center'}}>
        <Card style={{width:'90%'}}>
            <Card.Content>
            <Avatar.Image size={30} source={{uri:'https://sm.ign.com/t/ign_pk/cover/a/avatar-gen/avatar-generations_rpge.300.jpg'}} />
                <Paragraph> Informações sobre a pessoa: Groselha groselha groselha groselha</Paragraph>
                <Text variant= 'bodyMedium' >Últimas postagens: </Text>
              
            </Card.Content>
            <Card.Cover source = {{ uri:'https://inovaveterinaria.com.br/wp-content/uploads/2015/04/gato-sem-raca-INOVA-1024x683.jpg'}}/>
            
        </Card>

        <Card style={{width:'90%'}}>
            <Card.Content>
            <Avatar.Image size={30} source={{uri:'https://pt.quizur.com/_image?href=https%3A%2F%2Fstatic.quizur.com%2Fi%2Fb%2F5915ec3ae5fe01.32768031photo+%284%29.jpg&w=600&h=600&f=webp'}} />
                <Paragraph> Informações sobre a pessoa: Groselha groselha groselha groselha</Paragraph>
                <Text variant= 'bodyMedium' >Últimas postagens: </Text>
              
            </Card.Content>
            <Card.Cover source = {{ uri:'https://boanoticiabrasil.com.br/wp-content/uploads/2024/06/Beneficios-do-suco-de-laranja-como-auxilia-na-saude-intestinal-1.jpg'}}/>
            
        </Card>

        <Card style={{width:'90%'}}>
            <Card.Content>
            <Avatar.Image size={30} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/e/e9/Manoel_Gomes_em_2022_%28cortado%29.jpg'}} />
                <Paragraph> Informações sobre a pessoa: Groselha groselha groselha groselha</Paragraph>
                <Text variant= 'bodyMedium' >Últimas postagens: </Text>
              
            </Card.Content>
            <Card.Cover source = {{ uri:'https://images.tcdn.com.br/img/img_prod/1140357/caneta_esferografica_bic_cristal_dura_mais_azul_ponta_media_de_1_0mm_kit_10_unidades_2640_3_0156dd57ba414a1c3af6683b4614af4f.jpg'}}/>
            
        </Card>

        <Card style={{width:'90%'}}>
            <Card.Content>
            <Avatar.Image size={30} source={{uri:'https://sm.ign.com/t/ign_pk/cover/a/avatar-gen/avatar-generations_rpge.300.jpg'}} />
                <Paragraph> Informações sobre a pessoa: Groselha groselha groselha groselha</Paragraph>
                <Text variant= 'bodyMedium' >Últimas postagens: </Text>
              
            </Card.Content>
            <Card.Cover source = {{ uri:'https://inovaveterinaria.com.br/wp-content/uploads/2015/04/gato-sem-raca-INOVA-1024x683.jpg'}}/>
            
        </Card>

        <Card style={{width:'90%'}}>
            <Card.Content>
            <Avatar.Image size={30} source={{uri:'https://sm.ign.com/t/ign_pk/cover/a/avatar-gen/avatar-generations_rpge.300.jpg'}} />
                <Paragraph> Informações sobre a pessoa: Groselha groselha groselha groselha</Paragraph>
                <Text variant= 'bodyMedium' >Últimas postagens: </Text>
              
            </Card.Content>
            <Card.Cover source = {{ uri:'https://inovaveterinaria.com.br/wp-content/uploads/2015/04/gato-sem-raca-INOVA-1024x683.jpg'}}/>
            
        </Card>

        
        </View>
        </ScrollView>
    )
}