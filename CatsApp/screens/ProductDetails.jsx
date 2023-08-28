import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./productdetails.style";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const ProductDetails = ({ navigation }) => {
  const Navigation = useNavigation();
  const route = useRoute();
  const { item } = route.params;

  const handleRemove = async () => {
    try {
      await axios.delete(`http://192.168.100.244:3000/api/products/${item._id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      Navigation.goBack();
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Image source={{ uri: item.ImageUrl }} style={styles.image} />
        </View>

        <View style={styles.body}>
          <Text style={styles.titleBody}>{item.Title}</Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 5,
            }}
          >
            <Text style={styles.titleItem}>Breed:</Text>
            <Text style={styles.value}> {item.Breed}</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.titleItem}>Price:</Text>
            <Text style={styles.value}> {item.Price}</Text>
          </View>
          <Text style={styles.Description}>Description</Text>
          <Text style={styles.DescriptionValue}>{item.Description}</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleRemove}>
              <Text style={styles.buttonText}>Remove</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                Navigation.navigate("UpdateProducts", { item });
              }}
            >
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetails;
