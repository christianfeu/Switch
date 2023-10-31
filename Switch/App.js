import LoginUsuario from './components/Login/LoginUsuario';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginUsuario} />
        
      </Stack.Navigator>
    </NavigationContainer>
    </>

  );
}
