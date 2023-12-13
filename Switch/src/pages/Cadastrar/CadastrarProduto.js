import React from 'react';
import { useState, useEffect } from 'react';
import { TouchableOpacity,Platform, StyleSheet, Text, View,Image } from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import { getId,getToken } from '../../components/Storage';
import * as Location from 'expo-location';
import ImgurUpload from '../../components/ImgurUpload';

export default function CadastrarProduto({navigation}){
    
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [desc, setDesc] = useState('');
    const [categoria, setCategoria] = useState('');

    const useUsuario = async () => {
      try {
        const resultado = await getId();
        setUsuario(resultado);
      } catch (error) {
        console.error('Erro ao obter o ID:', error.message);
        // Trate o erro, se necessário
      }
    };

    const [usuario, setUsuario] = useState(null);
    useEffect(() => {
      // Chama a função assíncrona
      useUsuario();
    }, []);

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [categ, setCateg] = useState([
      {label: 'Camisa', value: '1'},
      {label: 'Tenis', value: '2'}
    ]);

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [lat,setLat] = useState(null);
    const [long,setLong]= useState(null);
  

    function Registrar() {
    
          console.log('Ok');
          var userObj = { prodNome:nome, prodPreco:preco, prodDesc:desc, prodLat:lat, prodLong:long, Usuario_idUsuario: usuario  };
          var jsonBody = JSON.stringify(userObj);
          console.log(jsonBody);
          console.log(usuario);
          fetch('https://switch-app.glitch.me//produto', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: jsonBody,
          })
            .then((response) => response.json())
            .then((json) => {
              console.log('registrado');
              navigation.navigate("Home");
            })
            .catch((err) => {
              console.log(err);
            });

    }

    useEffect(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        setLong(location.coords.longitude);
        setLat(location.coords.latitude);
      })();
    }, []);
  

    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      console.log('loc certo') 
    }

    return(
    <View style={styles.container}>

      <ImgurUpload/>

      <TextInput style={styles.input}
          label="Nome"
          value={nome}
          theme={{ colors: { primary: "#5DB075" } }}
          outlineColor='#5DB075'
          mode='outlined'
          onChangeText={(event) => setNome(event)}
      />

      <TextInput style={styles.input}
          label="Preço"
          value={preco}
          theme={{ colors: { primary: "#5DB075" } }}
          outlineColor='#5DB075'
          mode='outlined'
          onChangeText={(event) => setPreco(event)}
      />

      <TextInput style={styles.input}
          label="Descrição"
          value={desc}
          theme={{ colors: { primary: "#5DB075" } }}
          outlineColor='#5DB075'
          mode='outlined'
          onChangeText={(event) => setDesc(event)}
      />

      {/* <DropDownPicker style={styles.input}
          open={open}
          placeholder="Selecione a categoria"
          value={value}
          items={categ}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setCateg}
      /> */}

      
      <Button 
      mode="contained" 
      theme={{ colors: { primary: "#5DB075" } }}
      outlineColor='#5DB075'
      onPress={Registrar} style={styles.button}>
        Cadastrar
      </Button>
   
    </View>     
    );
 
}

const styles = StyleSheet.create({
    button: {
      marginTop: 24,
    },
    row: {
      flexDirection: 'row',
      marginTop: 4,
    },
    link: {
      fontWeight: 'bold',
    },
    container: {
      flex: 1,
      marginTop: 40,
      padding: 20,
    },
    input: {
      marginVertical: 10,   
    },

    header: {
      fontSize: 26,
      fontWeight: 'bold',
      paddingVertical: 14,
    },
  });

