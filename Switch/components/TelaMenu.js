import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TelaLista } from './TelaLista';
import CadastrarUsuario from './Cadastrar/CadastrarUsuario';

const Tab = createBottomTabNavigator();

export function TelaMenu() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Lista" component={TelaLista} />
      <Tab.Screen name="Registrar" component={CadastrarUsuario} />
    </Tab.Navigator>
  );
}