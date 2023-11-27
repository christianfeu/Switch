import CadastrarUsuario from './src/pages/Cadastrar/CadastrarUsuario';
import LoginUsuario from './src/pages/Login/LoginUsuario';
import {TelaMenu} from './src/pages/TelaMenu';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer} from '@react-navigation/native';
import TelaEditar from './src/pages/TelaEditar';
import { StatusBar } from 'expo-status-bar';
import Home from './src/pages/Home/Home';
import Logo from './src/components/Logo';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        
      }}
      >
        <Stack.Screen 
        name="Login" 
        options={{
          headerShown: false,
        }}
        component={LoginUsuario} /> 
        <Stack.Screen 
        name="Home" 
        options={{
          headerLeft: null,
          headerRightContainerStyle: {
            marginRight: 10,
          },
          headerTitleStyle: {
            fontSize: 36,
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
          //headerTitle: (props) => <Logo {...props}/>
          title: 'Switch'
        }}
        component={Home}/>
        <Stack.Screen name="Registrar" component={CadastrarUsuario} />
        <Stack.Screen name="Menu" component={TelaMenu} />
        <Stack.Screen name="Editar" component={TelaEditar} /> 
        
      </Stack.Navigator>
    </NavigationContainer>
    </>

  );
}
