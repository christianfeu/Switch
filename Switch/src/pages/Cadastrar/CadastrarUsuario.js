import React from 'react';
import { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { TextInput,Button } from 'react-native-paper';


export default function CadastrarUsuario({navigation}){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaConfirma, setSenhaConfirma] = useState('');

    function Registrar() {
    
        if (senha == senhaConfirma) {
          console.log('Ok');
          var userObj = { nome: nome, email: email, senha: senha };
          var jsonBody = JSON.stringify(userObj);
          console.log(jsonBody);
          fetch('https://switch-app.glitch.me//usuario', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: jsonBody,
          })
            .then((response) => response.json())
            .then((json) => {
              navigation.navigate("Login");
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          alert('Senhas diferentes!');
        }
    }

    return(
    <View style={styles.container}>

      <TextInput style={styles.input}
          label="Nome"
          theme={{ colors: { primary: "#5DB075" } }}
          outlineColor='#5DB075'
          value={nome}
          mode='outlined'
          onChangeText={(event) => setNome(event)}
      />

      <TextInput style={styles.input}
        label="Email"
        value={email}
        theme={{ colors: { primary: "#5DB075" } }}
        outlineColor='#5DB075'
        mode='outlined'
        onChangeText={(event) => setEmail(event)}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput style={styles.input}
        label="Password"
        mode='outlined'
        theme={{ colors: { primary: "#5DB075" } }}
        outlineColor='#5DB075'
        onChangeText={(event) => setSenha(event)}
        secureTextEntry
      />
      <TextInput style={styles.input}
        label="Password"
        mode='outlined'
        theme={{ colors: { primary: "#5DB075" } }}
        outlineColor='#5DB075'
        onChangeText={(event) => setSenhaConfirma(event)}
        secureTextEntry
      />

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
      backgroundColor: 'white',
      flex: 1,
      paddingTop: 60,
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

