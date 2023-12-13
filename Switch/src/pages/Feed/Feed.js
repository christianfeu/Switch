import { useState, useEffect } from "react";
import * as React from 'react';
import { Modal, Portal, Text, Button, PaperProvider } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import {
  View,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import MandarProposta from "../Propostas/MandarProposta";


function Feed() {

  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(true);
  const [nome, setNome] = useState('');
  const [nomesUsuarios, setNomesUsuarios] = useState({});

  const [modal, setModal] = useState(false);


  useEffect(() => {
    async function fetchList() {
      setRefreshing(true);
      try {
        const res = await fetch('https://switch-app.glitch.me/produtos', {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const resJson = await res.json();
        setData(resJson);
        setRefreshing(false);

        // Busca os nomes de usuário após obter os produtos
        fetchUsuarios(resJson);
      } catch (e) {
        console.log(e);
      }
    }

    async function fetchUsuarios(produtos) {
      const usuariosPromises = produtos.map((post) => {
        return fetch(`https://switch-app.glitch.me/usuarios/${post.Usuario_idUsuario}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(res => res.json())
          .then(resJson => ({ id: post.Usuario_idUsuario, nome: resJson[0].Nome }))
          .catch(e => {
            console.log(e);
            return { id: post.Usuario_idUsuario, nome: 'Nome Indisponível' };
          });
      });

      // Aguarda todas as promessas serem resolvidas
      const usuarios = await Promise.all(usuariosPromises);

      // Atualiza o estado com os nomes de usuário
      const nomesUsuarios = {};
      usuarios.forEach(usuario => {
        nomesUsuarios[usuario.id] = usuario.nome;
      });
      setNomesUsuarios(nomesUsuarios);
    }

    fetchList();
  }, []);

     function renderItem({ item: post }) {
     return (
      
      <View style={styles.post}>
        <View style={styles.postHeader}>
          <View style={styles.userInfo}>
            <Text style={styles.author}>{nomesUsuarios[post.Usuario_idUsuario]}</Text>
            <Text style={styles.place}>Quer troca esse produto!</Text>
          </View>
        </View>

        <View>
          <Image
            style={styles.picture_url}
            source={{ uri: post.prodFoto }}
          />
        </View>

        <View style={styles.footer}>
          <View style={styles.actions}>
            <View>
                <Text style={styles.nomeProduto}>{post.prodNome}</Text>
                <Text style={styles.precoProduto}>R$ {post.prodPreco}</Text>   
            </View>
            <View>
                <Button 
                    mode="contained" 
                    theme={{ colors: { primary: "#5DB075" } }}
                    outlineColor='#5DB075'
                    icon="arrow-u-right-top-bold"
                    onPress={() => setModal(true)}
                    >
                        Proposta
                </Button>


            </View>
          </View>
          
          <View>
            <Text style={styles.description}>Descrição: {post.prodDesc}</Text>
          </View>
        </View>
      </View>
    );
  }

  const handleRefresh = () => {
    setRefreshing(false);
    fetchList();
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.idProduto}
        renderItem={renderItem}
      />
      <MandarProposta
                  show={modal}
                  close={() => setModal(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  post: {
    marginVertical: 15,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor:'#5DB075',
    
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
    marginVertical: 15,
  },
  userInfo: {},
  author: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  place: {
    fontSize: 12,
    color: '#FFFFFF'
  },
  picture_url: {
    width: '100%',
    height: 400
  },
  footer: {
    backgroundColor:"#FFFFFF",
    paddingHorizontal: 15,
    color:'#000000',
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15
  },
  action: {
    marginRight: 8
  },
  leftActions: {
    flexDirection: 'row'
  },
  likes: {
    fontWeight: 'bold',
    fontSize: 12
  },
  hashtags: {
    color: '#002D5E'
  },
  nomeProduto:{
    fontSize: 14,
    color: '#000000',
    fontWeight: 'bold'  
  },
  precoProduto:{
    fontSize: 12,
    color: '#000000', 
  },
  description: {
    color: '#000000',
    paddingVertical: 15,
    lineHeight: 18
  }
});

export default Feed;