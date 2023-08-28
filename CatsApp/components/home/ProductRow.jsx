import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


const ProductRow = ({item}) => {
  const Navigation=useNavigation()

  return (
    <TouchableOpacity onPress={()=>{Navigation.navigate("ProductDetails",{item})}}>
    <View style={styles.card}>
      <Image source={{uri: item.ImageUrl }} style={styles.image} />
      <Text style={styles.name}>{item.Title}</Text>
      <Text style={styles.price}>Price: {item.Price}</Text>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 8,
    borderRadius: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  price: {
    color: 'green',
    fontSize: 16,
  },
});
    
export default ProductRow;

