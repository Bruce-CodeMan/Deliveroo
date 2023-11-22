/*
 * @Date: 2023-11-21 14:14:58
 * @Author: Bruce Hsu
 * @Description: 
 */
import { SafeAreaView, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import {
  ChevronDownIcon,
  UserIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon
} from "react-native-heroicons/outline";

// Custom Imports
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

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
      {/* header end */}

      {/* search  */}
      <View className="flex-row items-center space-x-2 mx-4 pb-2">
        <View className="flex-row space-x-2 bg-gray-200 p-3 flex-1">
          <MagnifyingGlassIcon size={20} color="gray"/>
          <TextInput 
            placeholder="请输入你感兴趣的门店"
          />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB"/>
      </View>
      {/* search end */}

      {/* body start */}
      <ScrollView className="bg-gray-100">
        <Categories />

        <FeaturedRow 
          id="1"
          title="Featured 1"
          description="这是Featured 1"
        />
      </ScrollView>
      {/* body end */}
    </SafeAreaView>
  )
}

export default HomeScreen;