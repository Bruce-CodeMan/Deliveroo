/*
 * @Date: 2023-11-21 16:23:47
 * @Author: Bruce Hsu
 * @Description: 
 */
import { useNavigation, useRoute } from "@react-navigation/native"
import { useLayoutEffect } from "react"

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
      short_description,
      dishes
    }
  } = useRoute()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])


}

export default RestaurantScreen;