import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import Device from 'expo-device';
import * as Location from 'expo-location';

export default function Loc() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [lat,setLat] = useState(null);
  const [long,setLong]= useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android' && !Device.isDevice) {
        setErrorMsg(
          'Oops, this will not work on Snack in an Android Emulator. Try it on your device!'
        );
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setLong(location.coords.longitude);
      setLat(location.coords.latitude);
    })();
  }, []);

  let text = 'Waiting..';
  let loong;
  let laat;
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    laat = JSON.stringify(lat);
    loong = JSON.stringify(long);
    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>lat:{laat}</Text>
      <Text style={styles.paragraph}>long:{loong}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
});
