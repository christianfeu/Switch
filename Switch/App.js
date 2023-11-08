import CadastrarUsuario from './components/Cadastrar/CadastrarUsuario';
import LoginUsuario from './components/Login/LoginUsuario';
import {TelaMenu} from './components/TelaMenu';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer} from '@react-navigation/native';

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
        
      </Stack.Navigator>
    </NavigationContainer>
    </>

  );
}
