# Leitor de Qr-code com o Expo Camera em React Native 
***
### Este exemplo tem como objetivo ajudar os alunos da 2CB e 2C a desenvolverem um app com a funcionalidade de câmera do Expo ->
***

***
### ATENÇÃO - Trabalhe em melhorias para seu trabalho final! APENAS VEJA O CÓDIGO ATUAL COMO UM PROTÓTIPO! 
***


###Pacotes usados:

- [x] npm install react-native-paper 
- [x] npm install react-native-vector-icons
- [x] npx expo install expo-camera

### Cole este plugin em seu app.json dentro do Expo:

"plugins": [
      [
        "expo-camera",
        {
          "cameraPermission": "Allow $(PRODUCT_NAME) to access your camera",
          "microphonePermission": "Allow $(PRODUCT_NAME) to access your microphone",
          "recordAudioAndroid": true
        }
      ]
    ]

### Rode este comando para que o Expo faça um build dos plugins do Expo Camera que adicionamos
- npx expo prebuild



###Documentação Completa Sobre o Uso do Expo Camera:
- https://docs.expo.dev/versions/latest/sdk/camera/

###Site para gerar um Qr-code para você testar seu leitor:
- https://www.qr-code-generator.com/


