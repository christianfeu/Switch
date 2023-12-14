import React, { useState, useEffect } from 'react';
import { View, Image, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import { setLink } from './Storage';

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
      base64: true,
      quality: 1,
    });

    if (!result.cancelled) {
      console.log(result);
      setImageURI(result);
      uploadToImgur(result);
    }
  };

  const uploadToImgur = async (imageUri) => {
    console.log(imageUri);
    
    var formdata = new FormData();
    formdata.append("image", imageUri.assets[0].base64)

    var requestOptions = {
      method: 'POST',
      headers:{
        "Authorization": "Client-ID e37bed5c57fc159"
      },
      body: formdata,
      redirect: 'follow'
    };

    fetch("https://api.imgur.com/3/image", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result);
        const link = JSON.parse(result);
        console.log(link.data.link);
        setLink(link.data.link);
      })
      .catch(error => console.log('error', error));
  };

  return (
    <View style={{ alignItems: 'center' }}>
      {imageURI  && <Image source={{ uri: imageURI.uri }} style={{ width: 200, height: 200 }} />}
      <Button icon="camera" mode="text" onPress={pickImage} theme={{ colors: { primary: "#5DB075" } }}
      outlineColor='#5DB075'>
        Escolha a imagem
      </Button>
    </View>
  );
};

export default ImgurUpload;
