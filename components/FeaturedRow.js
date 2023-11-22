/*
 * @Date: 2023-11-21 16:10:37
 * @Author: Bruce Hsu
 * @Description: 
 */
import { View, Text, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";

// Custom Imports
import RestaurantCard from "./RestaurantCard"

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{ title }</Text>
        <ArrowRightIcon color="#00CCBB"/>
      </View>

      <Text className="text-xs text-gray-500 px-4">{ description }</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        <RestaurantCard 
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo!Sushi"
          rating={4.5}
          genre="China"
          address="123 Street"
          short_description="This is a test description"
          dishes={[]}
        />
        <RestaurantCard 
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="杀猪菜"
          rating={5.0}
          genre="Japan"
          address="123 Street"
          short_description="This is a test description"
          dishes={[]}
        />

      </ScrollView>
    </View>
  )
}

export default FeaturedRow;