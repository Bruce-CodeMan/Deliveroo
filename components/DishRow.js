/*
 * @Date: 2023-11-22 10:32:36
 * @Author: Bruce Hsu
 * @Description: 
 */
import { View, Text, TouchableOpacity, Image } from "react-native"
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid"
import { useState } from "react"

const DishRow = ({ name, description, price, imgUrl}) => {

  const formatter = new Intl.NumberFormat('zh-CN', {
    style: 'currency',
    currency: 'CNY'
  })

  const [isPressed, setIsPressed] = useState(false);

  return (
    <>
      <TouchableOpacity
        className={`bg-white border p-4 border-gray-100 ${isPressed && "border-b-0"}`}
        onPress={() => setIsPressed(!isPressed)}
      >
        <View className="flex-row">
          {/* description start */}
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{ name }</Text>
            <Text className="text-gray-400">{ description }</Text>
            <Text className="mt-2 text-gray-700">{ formatter.format(price) }</Text>
          </View>
          {/* description end */}
          {/* image show start */}
          <Image 
            source={{
              uri: imgUrl
            }}
            className="h-20 w-20 bg-gray-300 p-4"
          />
          {/* image show end */}
        </View>
      </TouchableOpacity>

      {/* isPress is True */}
      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2">
            <TouchableOpacity>
              <MinusCircleIcon 
                size={30}
              />
            </TouchableOpacity>
            <Text></Text>
            <TouchableOpacity>
              <PlusCircleIcon 
                size={30}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  )
}

export default DishRow;