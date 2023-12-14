import * as React from 'react';
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert } from 'react-native';
import { Avatar, Card, IconButton,Button, } from 'react-native-paper';
import { getId } from '../components/Storage';


export function TelaListaProduto({navigation}) {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(true);
 
 useEffect(() => {
 async function fetchList() {
    
    setRefreshing(true);
    fetch('https://switch-app.glitch.me//produtos',{
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(resJson => {
        setData(resJson);
        setRefreshing(false);
      })
      .catch(e => console.log(e));

}
     fetchList();
  }, []);



  function deletar(idProduto){
     console.log(idProduto);

     var requestOptions = {
       method: 'DELETE',
       redirect: 'follow'
     };
    
    fetch("https://switch-app.glitch.me//produto/"+idProduto, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  const confirmar = () =>
    Alert.alert('Confirmar', 'Deseja Excluir?', [
      {
        text: 'Cancelar',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => deletar(item.idProduto)},
    ]);

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

  const renderItemComponent = ({ item: prod }) => {
    if (prod.Usuario_idUsuario === usuario) {
      return (
        <View style={[styles.listItem, styles.shadowProp]}>
          <Card.Title style={{ maxWidth:274}}
            title={prod.prodNome}
            titleNumberOfLines={2}
            elevation={5}
            subtitle={"R$" + prod.prodPreco}
            left={(props) => <Avatar.Image size={47} source={{ uri: prod.prodFoto }} />}
          />
          <IconButton style={styles.icon} icon="trash-can-outline" onPress={() => deletar(prod.idProduto)} />
        </View>
      );
    } else {
      return null; 
    }
  };


  const handleRefresh = () => {
    setRefreshing(false);
    fetchList();
  };

  return (
    <View>
      <View>
        <FlatList
          data={data}
          renderItem={renderItemComponent}
          keyExtractor={item => item.idProduto.toString()}
          refreshing={refreshing}
          onRefresh={handleRefresh}
        />
      </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },

  bar: {
    marginVertical:20,
    marginHorizontal:40, 
    backgroundColor:'#5DB075',
  },

  icon:{
    justifyContent: 'center',
  },

  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: "#FFF",
    width: "80%",
    marginHorizontal: 20,
    flex: 1,
    alignSelf: "center",
    justifyContent:'center',
    flexDirection: "row",
    borderRadius: 10
  },
  shadowProp: {
    shadowColor: '#5DB075',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});
