import { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert } from 'react-native';


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


  console.log(data);

  const confirmar = () => {
    return Alert.alert(
      "Confirmar",
      "Deseja Excluir?",
      [
        {
          text: "Sim",
          onPress: () => {
           console.log("Sim");
          },
        },
        {
          text: "Não",
        },
      ]
    );
  };

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

  const renderItemComponent = ({ item }) => (
    <View style={styles.listItem}>
      <View style={{ alignItems: "center", flex: 1 }}>
        <Text style={{ fontWeight: "bold" }}>{item.prodNome}</Text>
        <Text>{item.idProduto}</Text>
      </View>
      <TouchableOpacity
        style={{ height: 50, width: 50, justifyContent: "center", alignItems: "center" }}
        onPress={() => { 
          deletar(item.idProduto);
         }}
      >
        <Text style={{ color: "red" }}>Excluir</Text>
      </TouchableOpacity>
    </View>
  );

  const ItemSeparator = () => (
    <View style={{
      height: 1,
      backgroundColor: "rgba(0,0,0,0.5)",
      marginLeft: 5,
      marginRight: 5,
    }} />
  );

  const handleRefresh = () => {
    setRefreshing(false);
    fetchList();
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItemComponent}
        keyExtractor={item => item.idProduto.toString()}
        ItemSeparatorComponent={ItemSeparator}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop: 60
  },
  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: "#FFF",
    width: "80%",
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 5
  }
});
