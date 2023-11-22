/*
 * @Date: 2023-11-21 16:55:35
 * @Author: Bruce Hsu
 * @Description: 
 */
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux"

// Custom Imports
import { selectBasketItems, selectBasketTotal } from "../stores/counterSlice"
import { useNavigation } from "@react-navigation/native"

const BasketIcon = () => {
  const formatter = new Intl.NumberFormat('zh-CN', {
    style: 'currency',
    currency: 'CNY'
  })

  const items = useSelector(selectBasketItems)
  const navigate = useNavigation()
  const basketTotal = useSelector(selectBasketTotal)

  return (
    <View className="absolute bottom-10 w-full z-10">
      <TouchableOpacity className="mx-5 bg-[#00CCBB] p-4 flex-row items-center">
        <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">{ items.length }</Text>
        <Text className="text-white flex-1 font-extrabold text-lg text-center">View Basket</Text>
        <Text className="text-white text-lg font-extrabold">{ formatter.format(basketTotal) }</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon;