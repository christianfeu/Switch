import TabRoutes from './tabRoutes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CadastrarUsuario from '../pages/Cadastrar/CadastrarUsuario';
import LoginUsuario from '../pages/Login/LoginUsuario';
import { TouchableOpacity, View, Text } from 'react-native';
import CadastrarProduto from '../pages/Cadastrar/CadastrarProduto';


const Stack = createNativeStackNavigator();

export default function StackRoutes(){
    return(
        <Stack.Navigator>
        <Stack.Screen 
        name="Login" 
        options={{
          headerShown: false,
        }}
        component={LoginUsuario} /> 

        <Stack.Screen 
        name="Registrar" 
        options={{
          headerLeft: null,
          headerRightContainerStyle: {
            paddingRight: 20,
          },
          headerTitleStyle: {
            fontSize: 26,
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
          headerRight: () => (
            <View>
              <TouchableOpacity style={{marginLeft:15}} onPress={()=>{navigation.navigate("Login")}}>
                <Text style={{marginRight:15,color:'#5DB075',fontSize:14,fontWeight: 'bold'}}>Login</Text>
              </TouchableOpacity>
            </View>
          ),
          title: 'Cadastrar',
        }}
        component={CadastrarUsuario} />

      <Stack.Screen 
        name="cadProd" 
        options={{
            headerShown: true,
            headerTitleStyle: {
              fontSize: 26,
              fontWeight: 'bold',
            },
            headerStyle: {
              borderBottomEndRadius:15,
              borderBottomStartRadius:15,
              shadowColor: '#5DB075',
              shadowOpacity: 0.2,
              shadowOffset: {
                width: 0,
                height: 2
              },
            },
            headerTitleAlign: 'center',
            title: 'Cadastrar novo produto',
        }}
        component={CadastrarProduto} />

        <Stack.Screen 
        name="Menu" 
        options={{
            headerShown: false,
        }}
        component={TabRoutes} />
        
      </Stack.Navigator>
    )
}