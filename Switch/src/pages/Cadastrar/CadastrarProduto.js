import React from 'react';
import { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';


export default function CadastrarProduto({navigation}){
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [desc, setDesc] = useState('');
    const [categoria, setCategoria] = useState('');
    //const idUsuario=


    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [categ, setCateg] = useState([
      {label: 'Camisa', value: '1'},
      {label: 'Tenis', value: '2'}
    ]);

    function Registrar() {
    
          console.log('Ok');
          var userObj = { prodNome: nome, prodPreco: preco, prodDesc: desc,usuario:3 };
          var jsonBody = JSON.stringify(userObj);
          console.log(jsonBody);
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
            })
            .catch((err) => {
              console.log(err);
            });

    }

    return(
    <View style={styles.container}>

      <Text style={styles.header}>Cadastrar Produto</Text>

      <TextInput style={styles.input}
          label="Nome"
          value={nome}
          mode='outlined'
          onChangeText={(event) => setNome(event)}
      />

      <TextInput style={styles.input}
          label="Preço"
          value={preco}
          mode='outlined'
          onChangeText={(event) => setPreco(event)}
      />

      <TextInput style={styles.input}
          label="Descrição"
          value={desc}
          mode='outlined'
          onChangeText={(event) => setDesc(event)}
      />

      {/* <DropDownPicker style={styles.input}
          open={open}
          value={value}
          items={categ}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setCateg}
      /> */}

      
      <Button mode="contained" onPress={Registrar} style={styles.button}>
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

