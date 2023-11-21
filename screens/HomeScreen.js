/*
 * @Date: 2023-11-21 14:14:58
 * @Author: Bruce Hsu
 * @Description: 
 */
import { SafeAreaView, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import {
  ChevronDownIcon,
  UserIcon
} from "react-native-heroicons/outline";

const HomeScreen = () => {

  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  })

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* header */}
      <View className="flex-row items-center pb-3 mx-4 space-x-2">
        <Image 
          source={{
            uri: "https://links.papareact.com/wru"
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Bruce Hsu</Text>
          <Text className="font-bold text-xl">
            Current location
            <ChevronDownIcon size={20} color="#00CCBB"/>
          </Text>
        </View>
        <TouchableOpacity>
          <UserIcon size={35} color="#00CCBB"/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen;