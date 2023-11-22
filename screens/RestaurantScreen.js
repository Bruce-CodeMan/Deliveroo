/*
 * @Date: 2023-11-21 16:23:47
 * @Author: Bruce Hsu
 * @Description: 
 */
import { View, Image, ScrollView, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native"
import { useLayoutEffect } from "react"
import { ArrowLeftIcon } from "react-native-heroicons/outline"

const RestaurantScreen = () => {

  const navigation = useNavigation()

  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description
    }
  } = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  })

  return (
    <ScrollView>
      <View className="relative">
        <Image 
          source={{
            uri: imgUrl
          }}
          className="w-full h-56 bg-gray-300 p-4"
        />
        <TouchableOpacity
          onPress={navigation.goBack}
          className="absolute top-20 left-5 p-2 bg-gray-100 rounded-full"
        >
          <ArrowLeftIcon size={20} color="#00CCBB"/>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )

}

export default RestaurantScreen;