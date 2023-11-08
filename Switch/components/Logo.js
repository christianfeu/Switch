import { Image, StyleSheet, View } from 'react-native';


export default function CadastrarUsuario(){
    return(
        <View style={styles.logo}>
            <Image source={require('../assets/logo.png')} style={styles.image} />
            <Text>switch</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  image: {
    width: 128,
    height: 128,
    marginBottom: 12,
  },

  logo:{
    flexDirection: 'row',
  }
});