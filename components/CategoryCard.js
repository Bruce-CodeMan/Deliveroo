/*
 * @Date: 2023-11-21 15:49:10
 * @Author: Bruce Hsu
 * @Description: 
 */
import { TouchableOpacity, Text, Image } from "react-native";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image 
        source={{
          uri: imgUrl
        }}
        className="h-20 w-20"
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold">{ title }</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard;