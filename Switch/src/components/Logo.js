import { Image, StyleSheet,Text, View } from 'react-native';


export default function Logo(){
    return(
        <View style={styles.logo}>
            <Image source={require('../../assets/logo.png')} style={styles.image} />
            <Text style={styles.font}>Switch</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
  },

  font: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  logo:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});