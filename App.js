/*
 * @Date: 1985-10-26 16:15:00
 * @Author: Bruce Hsu
 * @Description: 
 */
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"

// Custom Imports
import HomeScreen from './screens/HomeScreen';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


