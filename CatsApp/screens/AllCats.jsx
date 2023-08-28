import { View, TouchableOpacity, Text } from "react-native";
import React from "react";

import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./allCalts.styles";
import { COLORS } from "../constants";
import ProductList from "./ProductList";



const AllCats = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.wrapper}>
          <View style={styles.upperRow}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name="chevron-back-circle"
                size={30}
                color={COLORS.lightWhite}
              />
            </TouchableOpacity>
            <Text style={styles.heading}> Cats </Text>
          </View>
          <ProductList/>
        </View>
        
      </View>
    </SafeAreaView>
  );
};
export default AllCats;
