import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home/Home';


const Tab = createBottomTabNavigator();

export function TelaMenu() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />

    </Tab.Navigator>
  );
}