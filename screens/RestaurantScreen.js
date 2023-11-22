/*
 * @Date: 2023-11-21 16:23:47
 * @Author: Bruce Hsu
 * @Description: 
 */
import { View, Image, ScrollView, TouchableOpacity, Text } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native"
import { useLayoutEffect, useEffect } from "react"
import { ArrowLeftIcon, MapPinIcon, QuestionMarkCircleIcon, ChevronRightIcon } from "react-native-heroicons/outline"
import { StarIcon } from "react-native-heroicons/solid"
import { useDispatch } from "react-redux"

// Custom Imports
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";
import { setRestaurant } from "../stores/restaurantSlice";

const RestaurantScreen = () => {

  const navigation = useNavigation()
  const dispatch = useDispatch()

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

  useEffect(() => {
    dispatch(setRestaurant({
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description
    }))
  }, [dispatch])

  return (
    <>
    <BasketIcon />
    <ScrollView>
      <View className="relative">
        {/* imgUrl start */}
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
        {/* imgUrl end */}
        {/* description start */}
        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{ title }</Text>
            <View className="flex-row space-x-2 my-2">
              {/* star & rating start */}
              <View className="flex-row items-center space-x-2"> 
                <StarIcon size={22} opacity={0.5} color="#00CCBB"/>
                <Text className="text-xs text-gray-500">
                  <Text className="text-green-500">{ rating }</Text> · {genre}
                </Text>
              </View>
              {/* star & rating end */}
              {/* address start */}
              <View className="flex-row items-center space-x-2">
                <MapPinIcon color="gray" opacity={0.4} size={22}/>
                <Text className="text-xs text-gray-400">Nearby · { address }</Text>
              </View>
              {/* address end */}
            </View>
            {/* short_description start */}
            <Text className="text-gray-400 mt-2 pb-4">{ short_description }</Text>
            {/* short_description end */}
          </View>
          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-100">
            <QuestionMarkCircleIcon color="gray" size={22} opacity={0.6}/>
            <Text className="pl-2 flex-1 text-md font-bold">
              Have you a food allergy?
            </Text>
            <ChevronRightIcon color="#00CCBB" size={20}/>
          </TouchableOpacity>
        </View>
        {/* description end */}

        <View className="pb-36">
          <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
          {/* dish start */}
          <DishRow 
            id="1"
            name="可乐鸡翅"
            description="超级好吃"
            price={29}
            imgUrl="https://links.papareact.com/gn7"
          />
          <DishRow
            id="2" 
            name="鸡腿"
            description="超级好吃+1"
            price={15}
            imgUrl="https://links.papareact.com/gn7"
          />
          <DishRow
            id="3" 
            name="羊肉串"
            description="超级好吃+1"
            price={10}
            imgUrl="https://links.papareact.com/gn7"
          />
          {/* dish end */}
        </View>
      </View>
    </ScrollView>
    </>
  )

}

export default RestaurantScreen;