/*
 * @Date: 1985-10-26 16:15:00
 * @Author: Bruce Hsu
 * @Description: 
 */
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"

export default function App() {
  return (
    <NavigationContainer>
      <View className="flex-1 justify-center items-center bg-red-300">
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}


