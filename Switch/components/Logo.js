import { Image, StyleSheet,Text, View } from 'react-native';


export default function Logo(){
    return(
        <View style={styles.logo}>
            <Image source={require('../assets/logo.png')} style={styles.image} />
            <Text style={styles.font}>Switch</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  image: {
    width: 64,
    height: 64,
  },

  font: {
    fontSize: 36,
    fontWeight: 'bold',
  },

  logo:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});