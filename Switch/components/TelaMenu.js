import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TelaLista } from './TelaLista';
import { TelaListaProduto } from './TelaListaProduto';
import CadastrarUsuario from './Cadastrar/CadastrarUsuario';
import CadastrarProduto from './Cadastrar/CadastrarProduto';

const Tab = createBottomTabNavigator();

export function TelaMenu() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Lista Usuario" component={TelaLista} />
      <Tab.Screen name="Registrar Usuario" component={CadastrarUsuario} />
      <Tab.Screen name="Lista Produto" component={TelaListaProduto} />
      <Tab.Screen name="Registrar Produto" component={CadastrarProduto} />
    </Tab.Navigator>
  );
}