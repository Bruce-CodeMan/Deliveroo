/*
 * @Date: 2023-11-21 15:47:52
 * @Author: Bruce Hsu
 * @Description: 
 */
import { ScrollView } from "react-native";

// Custom Imports
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="test1"/>
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="test3"/>
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="test1"/>
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="test3"/>
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="test1"/>
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="test3"/>
    </ScrollView>
  )
}

export default Categories;