import React from "react";
import {useState} from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import Logo from "../Logo";

export default function LoginUsuario({navigation}){

    const [email, setEmail]= useState('');
    const [senha, setSenha]= useState('');

    function logar(){
        var loginObj = {email: email, senha: senha};

        var myHeaders = {"Content-Type": "application/json"};
        var raw = JSON.stringify(loginObj);

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("https://switch-app.glitch.me//login", requestOptions)
        .then(response => response.json())
        .then(result => {
          if(result.menssagem == "sucesso!"){
            navigation.navigate("Menu");
          }

        })
        .catch(error => console.log('error', error));
      
    }

    return(
    <View style={styles.container}>

      <View style={styles.logo}>
        <Text style={styles.font}>Bem Vindo ao</Text>
        <Logo/>
      </View>

      <View style={styles.container}>
          <TextInput style={styles.input}
          label="Email"
          mode='outlined'
          selectionColor='red'
          underlineColor='red'
          value={email}
          onChangeText={email => setEmail(email)}
          />

          <TextInput style={styles.input}
          label="Senha"
          mode='outlined'
          value={senha}
          onChangeText={senha => setSenha(senha)}
          />

          <View style={styles.row}>
            <Text style={styles.label}>Primeira vez no Switch? </Text>
              <TouchableOpacity onPress={()=>{navigation.navigate("Registrar")}}>
                <Text style={styles.link}>Cadastrar.</Text>
              </TouchableOpacity>
          </View>

          <TouchableOpacity >
            <Button 
            mode="contained" 
            onPress={logar}>
            Login
            </Button>
          </TouchableOpacity>

          <View style={styles.forgotPassword}>
            <TouchableOpacity
            >
              <Text style={styles.label}>Esqueceu sua senha?</Text>
            </TouchableOpacity>
          </View>

      </View>
        
    </View>

    );
}

const styles = StyleSheet.create({
  
  forgotPassword: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 24,
  },

  row: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 24,
    justifyContent: 'center'

  },

  container: {
    flex: 1,
    marginTop: 40,
    padding: 20,
  },

  input: {
    marginVertical: 10,   
  },

  link: {
    fontWeight: 'bold',
  },

  font: {
    fontSize: 26,
    fontWeight:'bold',
  },

  logo: {
    alignItems: 'center',
    justifyContent: 'center'
  },

});