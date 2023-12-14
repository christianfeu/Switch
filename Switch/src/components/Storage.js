import AsyncStorage from '@react-native-async-storage/async-storage';

export const setToken = async (token) => {
    await AsyncStorage.setItem('userToken', token);
};

export const setId = async (id) => {
    await AsyncStorage.setItem('idUsuario', id);
};

export const clearToken = async () => {
    await AsyncStorage.clear();
    navigation.navigate('TelaLogin');
};

export const getToken = async () => {
  const userToken = await AsyncStorage.getItem('userToken');
  return userToken;
};

export const getId = async () => {
    const idUsuario = await AsyncStorage.getItem('idUsuario');
    return idUsuario;
};

export const setLink = async (Link) => {
    await AsyncStorage.setItem('userLink', Link);
};

export const getLink = async () => {
    const userLink = await AsyncStorage.getItem('userLink');
    return userLink;
};


