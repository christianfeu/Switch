import React, { useState, useEffect } from 'react';
import { View, Image, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';

const ImgurUpload = () => {
  const [imageURI, setImageURI] = useState(null);

  useEffect(() => {
    // Solicitar permissões ao carregar o componente
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permissão necessária', 'Por favor, conceda permissão para acessar a galeria.');
      }
    })();
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImageURI(result.uri);
      uploadToImgur(result.uri);
    }
  };

  const uploadToImgur = async (imageUri) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer 795593ae7edc6aa9527579fa5aebe8be880bc952");

    var formdata = new FormData();
    formdata.append("image", imageUri);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    fetch("https://api.imgur.com/3/image", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  };

  return (
    <View>
      {imageURI && <Image source={{ uri: imageURI }} style={{ width: 200, height: 200 }} />}
      <Button icon="camera" mode="text" onPress={pickImage} theme={{ colors: { primary: "#5DB075" } }}
      outlineColor='#5DB075'>
        Escolha a imagem
      </Button>
    </View>
  );
};

export default ImgurUpload;
