/*
 * @Date: 2023-11-22 15:10:15
 * @Author: Bruce Hsu
 * @Description: 
 */
import { useNavigation } from "@react-navigation/native";
import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import { useState, useMemo } from "react"
import { XCircleIcon } from "react-native-heroicons/solid"

// Custom Imports
import { selectRestaurant } from "../stores/restaurantSlice";
import { selectBasketItems, selectBasketTotal, removeFromBasket } from "../stores/counterSlice";

const BasketScreen = () => {

  const formatter = new Intl.NumberFormat('zh-CN', {
    style: 'currency',
    currency: 'CNY'
  })

  const navigation = useNavigation()
  const restaurant = useSelector(selectRestaurant)
  const items = useSelector(selectBasketItems)
  const basketTotal = useSelector(selectBasketTotal)
  const dispatch = useDispatch()
  const [groupItemInBasket, setGroupItemInBasket] = useState([])

  useMemo(() => {
    const groupItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item)
      return results
    }, {})
    setGroupItemInBasket(groupItems)
  }, [items])


  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        {/* title & button start */}
        <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">{restaurant.title}</Text>
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full bg-gray-100 absolute top-5 right-5"
          >
            <XCircleIcon size={40} color="#00CCBB"/>
          </TouchableOpacity>
        </View>
        {/* title & button end */}

        {/* deliver time start */}
        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image 
            source={{
              uri: "https://links.papareact.com/wru"
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="flex-1">Deliver in 50 - 60 minutes</Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]">Change</Text>
          </TouchableOpacity>
        </View>
        {/* deliver time end */}

        {/* dishes start */}
        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupItemInBasket).map(([key, item]) => (
            <View
              key={key}
              className="flex-row items-center space-x-3 bg-white py-2 px-5"
            >
              <Text className="text-[#00CCBB]">{item.length} x </Text>
              <Image 
                source={{
                  uri: "https://links.papareact.com/gn7"
                }}
                className="h-12 w-12 rounded-full"
              />
              <Text className="flex-1">{item[0]?.name}</Text>
              <Text>{formatter.format(item[0]?.price)}</Text>
              <TouchableOpacity>
                <Text
                  className="text-[#00CCBB] text-xs"
                  onPress={() => dispatch(removeFromBasket({ id: key }))}
                >Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        {/* dishes end */}

        {/* account start */}
        <View className="p-5 bg-white mt-5 space-y-4">
          {/* dishes total start */}
          <View className="flex-row justify-between">
            <Text className="text-gray-400">SubTotal</Text>
            <Text className="text-gray-400">{ formatter.format(basketTotal) }</Text>
          </View>
          {/* dishes total end */}
          
          {/* deliver fee start */}
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Deliver Fee</Text>
            <Text className="text-gray-400">{formatter.format(5)}</Text>
          </View>
          {/* deliver fee end */}
          
          {/* total start */}
          <View className="flex-row justify-between">
            <Text>Order Total</Text>
            <Text className="font-extrabold">{formatter.format(basketTotal + 5)}</Text>
          </View>
          {/* total end */}
          <TouchableOpacity
            className="rounded-lg p-4 bg-[#00CCBB]"
          >
            <Text className="text-center text-white text-lg font-bold">Please Order</Text>
          </TouchableOpacity>
        </View>
        {/* account end */}
      </View>
    </SafeAreaView>
  )
}

export default BasketScreen;