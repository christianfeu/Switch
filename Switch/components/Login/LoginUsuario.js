import React from "react";
import {useState} from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { TextInput,Button } from 'react-native-paper';

export default function LoginUsuario(){

    const [email, setEmail]= useState('');
    const [senha, setSenha]= useState('');

    function logar(){
        var loginObj = {email: email, senha: senha};

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(loginObj);

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("https://switch-app.glitch.me//login", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

    return(
    <View style={styles.container}>
      <Text style={styles.header}>Bem Vindo ao</Text>
      <Text style={styles.header}>Switch</Text>

      <View style={styles.container}>
          <TextInput style={styles.input}
          label="Email"
          value={email}
          onChangeText={email => setEmail(email)}
          />

          <TextInput style={styles.input}
          label="Senha"
          value={senha}
          onChangeText={senha => setSenha(senha)}
          />

          <View style={styles.forgotPassword}>
            <TouchableOpacity
            >
              <Text style={styles.label}>Esqueceu sua senha ?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity >
            <Button mode="contained" onPress={() => console.log('Pressed')}>
                Login
            </Button>
          </TouchableOpacity>

          <View style={styles.row}>
            <Text style={styles.label}>Primeira vez no Switch? </Text>
              <TouchableOpacity>
                <Text style={styles.link}>Cadastrar</Text>
              </TouchableOpacity>
        </View>
      </View>
        
    </View>

    );
}

const styles = StyleSheet.create({
  
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },

  row: {
    flexDirection: 'row',
    marginTop: 4,
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

  header: {
    fontSize: 26,
    fontWeight: 'bold',
    paddingVertical: 14,
  },

});