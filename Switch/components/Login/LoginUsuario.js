import React from "react";
import {useState} from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { TextInput,Button } from 'react-native-paper';

export default function LoginUsuario(){

    const [email, setEmail]= useState('');
    const [senha, setSenha]= useState('');

    function logar(){
        var loginObj = {emial: email, senha: senha};

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
            width: '100%',
            marginVertical: 10,
            paddingHorizontal: 4,
            paddingTop: 50,
        },

        input: {
            marginVertical: 10,    
        },

      });

    return(
        <>
    <View style={styles.container}>
            <TextInput
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
        <Text style={styles.label}>Não tem conta? </Text>
        <TouchableOpacity>
          <Text style={styles.link}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
        
        </>

    );
}