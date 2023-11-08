import React from 'react';
import { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { TextInput,Button } from 'react-native-paper';


export default function CadastrarUsuario(){
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
          fetch('https://api-mysql.glitch.me/usuarios', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: jsonBody,
          })
            .then((response) => response.json())
            .then((json) => {
              console.log(json);
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

      <TextInput
          label="Name"
          value={nome.value}
          onChangeText={(event) => setNome(event)}
      />

      <TextInput
        label="Email"
        value={email.value}
        onChangeText={(event) => setEmail(event)}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        value={password.value}
        onChangeText={(event) => setSenha(event)}
        secureTextEntry
      />
      <TextInput
        label="Password"
        value={password.value}
        onChangeText={(event) => setSenhaConfirma(event)}
        secureTextEntry
      />

      <Button mode="contained" onPress={_onSignUpPressed} style={styles.button}>
        Cadastrar
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Ja tem conta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>    
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
      flexDirection: 'column',
      alignSelf: 'center',
      width: 'auto',
      minWidth: 50,
    },
    input: {
      marginVertical: 10,   
    },
  });

