/*
 * @Date: 1985-10-26 16:15:00
 * @Author: Bruce Hsu
 * @Description: 
 */
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Provider } from "react-redux"

// Custom Imports
import { store } from "./stores/store";
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from "./screens/RestaurantScreen";
import BasketScreen from "./screens/BasketScreen";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Restaurant" component={RestaurantScreen}/>
          <Stack.Screen name="Basket" component={BasketScreen} options={{ presentation: 'modal', headerShown: false }}/>
          <Stack.Screen name="PreparingOrder" component={PreparingOrderScreen} options={{ presentation: 'fullScreenModal', headerShown: false }}/>
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}


