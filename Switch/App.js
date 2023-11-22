import CadastrarUsuario from './src/pages/Cadastrar/CadastrarUsuario';
import LoginUsuario from './src/pages/Login/LoginUsuario';
import {TelaMenu} from './src/pages/TelaMenu';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer} from '@react-navigation/native';
import TelaEditar from './src/pages/TelaEditar';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Login" component={LoginUsuario} /> 
        <Stack.Screen name="Registrar" component={CadastrarUsuario} />
        <Stack.Screen name="Menu" component={TelaMenu} />
        <Stack.Screen name="Editar" component={TelaEditar} /> 
        
      </Stack.Navigator>
    </NavigationContainer>
    </>

  );
}
