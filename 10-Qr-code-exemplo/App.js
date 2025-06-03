
import { StyleSheet, Text, View, Modal, Alert } from 'react-native';
import { Button } from 'react-native-paper';

//Importação do expo camera - CameraView
import { CameraView, useCameraPermissions } from 'expo-camera'
import { useState, useRef } from 'react';

export default function App() {

  //Colocando o modal para iniciar em estado invisivel, é dentro dele que colocarei minha CameraView
  const [modalIsVisible, setModalIsVisible] = useState(false)

  //Requisiçao de permissão de câmera
  const [permission, requestPermission] = useCameraPermissions()

  //Para ler o QrCode apenas uma vez, usaremos o hook useRef

  const qrCodeLock = useRef(false)




  //Função 1: para abrir minha Modal, aqui estou fazendo um controle de visibilidade galera!

  async function handleOpenCamera() {

    try {

      //Aguardo o usuário dar permissão para o uso da câmera se precisar
      const { granted } = await requestPermission()

      //Se eu não tenho permissão, paro aqui e dou uma mensagem com o Alert
      if (!granted) {
        return Alert.alert("Camera", "Você precisa dar permissão para a câmera!")
      }

      //Toda vez que eu chamar esta função, meu modal se tornará visivel, dá para brincar com isso com seus Componentes também, fica a dica!
      setModalIsVisible(true)


    }

    catch (error) {

      console.log(error)

    }

  }


  //Função 2: Para ler meu Qr-code!

  function handleQrCodeRead(data) {
    console.log(data)

  }




  return (
    <View style={styles.container}>

      <Button mode="contained" onPress={handleOpenCamera}>
        Ler QR Code
      </Button>

      {/* ↑ Note que meu modal está invisível, ele só será ativado quando eu apertar o botão com minha função de visivilidade ↑ */}

      <Modal style={{ flex: 1 }} visible={modalIsVisible}>


        {/*  Montando nossa CameraView, nela tenho o lado da câmera que quero usar, no caso a de trás facing = 'back',
             e no scan, inicialmente colocarei para imprimir os dados do Qr code em meu log para ver se deu certo */}

        <CameraView
          style={{ flex: 1 }}
          facing='back'
          onBarcodeScanned={({ data }) => {

            //  Tendo dado certo, agora posso trabalhar o leitor para ler somente uma vez o qrCode 

            //Se tenho os dados e não li o qrCode atual  
            if (data && !qrCodeLock.current) {

              //Leia o qrCode atual
              qrCodeLock.current = true

              //E agora mostro o conteúdo do QrCode, apareceu no log deu certo
              handleQrCodeRead(data)

            }
          }}
        />


        <View style={styles.footer}>

          <Button mode="contained" onPress={() => setModalIsVisible(false)}>
            Cancelar
          </Button>

        </View>

      </Modal>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 32,
    left: 32,
    right: 32

  }
});


