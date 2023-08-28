import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import styles from '../search/search.style'
import { useNavigation } from "@react-navigation/native";
const SearchCard = ({item}) => {
const Navigation=useNavigation()
    
  return (
    <View>
     <TouchableOpacity style={styles.container} onPress={()=>{Navigation.navigate("ProductDetails",{item})}}> 
     <View style={styles.image}>
        <Image
        source={{uri:item.ImageUrl}}
           style={styles.inImage}
        />
     </View>
     <View style={styles.textContainer}>
        <Text style={styles.catTitle}>
            {item.Title}
        </Text>
        <Text style={styles.Breed}>
            {item.Breed}
        </Text>
        <Text style={styles.Breed}>
            {item.Price}
        </Text>
     </View>
     </TouchableOpacity>
    </View>
  )
}

export default SearchCard
