import { Text, View, TextInput, Button, StyleSheet } from 'react-native';

import { useState } from 'react';

export function TelaRegistrar() {
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

  return (
    <View>
      <Text>Registrar Usuário</Text>

      <TextInput
        placeholder="nome"
        style={styles.input}
        onChangeText={(event) => setNome(event)}
      />

      <TextInput
        placeholder="email"
        style={styles.input}
        onChangeText={(event) => setEmail(event)}
      />

      <TextInput
        secureTextEntry={true}
        placeholder="senha"
        style={styles.input}
        onChangeText={(event) => setSenha(event)}
      />
      <TextInput
        secureTextEntry={true}
        placeholder="confirmar senha"
        style={styles.input}
        onChangeText={(event) => setSenhaConfirma(event)}
      />

      <Button title="Entrar" color="black" onPress={Registrar} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
  },
});
