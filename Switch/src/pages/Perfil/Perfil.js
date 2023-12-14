import React from 'react';
import { Avatar, Card, IconButton,Button, } from 'react-native-paper';
import { useState, useEffect } from 'react';
import { getId } from '../../components/Storage';
import { View,Image,StyleSheet,Text } from 'react-native';


export default function Perfil({navigation}){

    const [nome, setNome] = useState(''); 

    const [idUsuario, setUsuario] = useState(null);

    const useUsuario = async () => {
    try {
        const resultado = await getId();
        setUsuario(resultado);
    } catch (error) {
        console.error('Erro ao obter o ID:', error.message);
    }
    };

    useEffect(() => {
    useUsuario();
    }, []);

    useEffect(() => {
    // Verificar se idUsuario não é nulo antes de fazer a solicitação
    if (idUsuario !== null) {
        async function fetchItem() {
        try {
            var requestOptions = {
            method: 'GET',
            redirect: 'follow'
            };

            const response = await fetch("https://switch-app.glitch.me//usuarios/" + idUsuario, requestOptions);
            const result = await response.json();
            console.log(result[0].Nome);
            setNome(result[0].Nome);
        } catch (error) {
            console.log('Erro ao obter dados do usuário:', error);
        }
        }
        fetchItem();
    }
    }, [idUsuario]);

    function deletar(idUsuario){
        console.log(idUsuario);
    
        var requestOptions = {
          method: 'DELETE',
          redirect: 'follow'
        };
        
        fetch("https://switch-app.glitch.me//usuario/"+idUsuario, requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
      }


    return(
        <View style={styles.container}>
            <Image
            source={{
                uri:
                'https://developerplus.com.br/wp-content/uploads/2021/10/user.png',
            }}
            style={{
                width: 200,
                height: 200,
                borderRadius: 200 / 2
            }}
            />
            <Text style={styles.textHeadingStyle}>{nome}</Text>

            <View style={styles.config} >
            
            <Button style={styles.config2} icon="account" mode="elevated" 
            onPress={() => { 
            navigation.navigate('Editar',{
                idUsuario: idUsuario,
            });}}
            theme={{ colors: { primary: "#5DB075" } }}
            outlineColor='#5DB075'
            >
                Editar dados pessoais
            </Button>

            <Button style={styles.config2} icon="logout" mode="elevated" onPress={() => {navigation.navigate("Login");} }
            theme={{ colors: { primary: "#5DB075" } }}
            outlineColor='#5DB075'
            >
                Sair
            </Button>

            <Button style={styles.config3} icon="trash-can" mode="elevated" 
            onPress={() => { 
                deletar(idUsuario);
                navigation.navigate("Login");
               }}
            theme={{ colors: { primary: "red" } }}
            outlineColor='red'
            >
                Exclui conta
            </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginVertical:10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    config:{
        marginTop: 50,    
    },
    config2:{
        marginTop: 20,
    },
    config3:{
        marginTop: 80,
    },
    
    textHeadingStyle: {
      marginTop: 20,
      marginBottom: 20,
      fontSize: 36,
      color: '#5DB075',
      fontWeight: 'bold',
    },
    
  });
  