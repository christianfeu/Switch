import React from 'react';
import { TelaListaProduto } from '../TelaListaProduto';
import { StyleSheet, View, } from 'react-native';
import { IconButton, Searchbar } from 'react-native-paper';

export default function Produtos({navigation}){

    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    
    return(
    <>
        <Searchbar style={styles.bar}
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
        />
        <TelaListaProduto/>
        <View style={styles.botao}>
        <IconButton
            icon="plus"
            mode="contained" 
            iconColor='#FFFFFF'
            containerColor='#5DB075'
            size={20}
            onPress={() => {navigation.navigate("cadProd");}}
        />
        </View>
    </>
    
    );
}

const styles = StyleSheet.create({
    bar: {
        marginVertical:20,
        marginHorizontal:40, 
        backgroundColor:'#5DB075',
    },
    botao:{
      position: 'absolute',
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      right: 30,
      bottom: 80,
    },
  });
  