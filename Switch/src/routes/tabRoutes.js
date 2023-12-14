import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home/Home';
import { Ionicons,Foundation,FontAwesome,FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity, View,Text } from 'react-native';
import Perfil from '../pages/Perfil/Perfil';
import Produtos from '../pages/Produtos/Produtos';
import Propostas from '../pages/Propostas/Propostas';
import { TelaListaProduto } from '../pages/TelaListaProduto';
import CadastrarProduto from '../pages/Cadastrar/CadastrarProduto';
import { TelaLista } from '../pages/TelaLista';
import TelaEditar from '../pages/TelaEditar';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {

    return (
      <Tab.Navigator 
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
            position: 'absolute',
            bottom: 12,
            left: 20,
            right: 20,
            elevation: 5,
            backgroundColor: '#ffffff',
            borderRadius: 15,
            height: 60,
            shadowColor: '#5DB075',
            shadowOpacity: 0.4,
            shadowOffset: {
              width: 0,
              height: 2
            },
        }
    }}
      >
        <Tab.Screen name="Home" component={Home} options={{
            tabBarIcon: ({focused})=>(
              <View style={{alignItems:'center', justifyContent: 'center'}} >
                <Foundation name="home" size={28} color={focused ? '#5DB075' : 'gray'} />
                <Text style={{color:focused ? '#5DB075' : 'gray', fontSize:12}}>Home</Text>
              </View>
            ),
                headerLeft: null,
                headerRight: () => (
                    <View>
                      <TouchableOpacity style={{marginLeft:15}}>
                        <Ionicons style={{marginLeft:15}} name="filter" size={28} color="#5DB075" />
                      </TouchableOpacity>
                    </View>
                  ),
                headerRightContainerStyle: {
                  marginRight: 10,
                },
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
                title: 'Switch',
                tabBarLabel: 'Inicio',
              }}
         />

        <Tab.Screen name="Produtos" component={Produtos} options={{
          tabBarIcon: ({focused})=>(
            <View style={{alignItems:'center', justifyContent: 'center', top:2.2}} >
              <FontAwesome5 name="shopping-bag" size={26} color={focused ? '#5DB075' : 'gray'} />
              <Text style={{color:focused ? '#5DB075' : 'gray', fontSize:12}}>Produtos</Text>
            </View>
          ),
                headerLeft: null,
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
                title: 'Produtos',
                
                tabBarLabel: 'Produtos',
              }}
         />
        
        <Tab.Screen 
            name="Propostas" component={Propostas} options={{
              tabBarIcon: ({focused})=>(
                <View style={{alignItems:'center', justifyContent: 'center', top:1.9}} >
                  <FontAwesome name="retweet" size={28} color={focused ? '#5DB075' : 'gray'} />
                  <Text style={{color:focused ? '#5DB075' : 'gray', fontSize:12}}>Propostas</Text>
                </View>
              ),
                headerLeft: null,
                headerRightContainerStyle: {
                  marginRight: 10,
                },
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
                title: 'Propostas',
              
                tabBarLabel: 'Propostas',
              }}
        />
        
        <Tab.Screen 
            name="Perfil" component={Perfil} options={{
              tabBarIcon: ({focused})=>(
                <View style={{alignItems:'center', justifyContent: 'center', top:2.2}} >
                  <FontAwesome5 name="user-alt" size={24} color={focused ? '#5DB075' : 'gray'} />
                  <Text style={{color:focused ? '#5DB075' : 'gray', fontSize:12}}>Perfil</Text>
                </View>
              ),
                headerLeft: null,
                headerRightContainerStyle: {
                  marginRight: 10,
                },
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
                title: 'Perfil',
                tabBarLabel: 'Perfil',
              }}
         />

      </Tab.Navigator>
    );
  }