import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, Ionicons } from "@expo/vector-icons";
import { SIZES, COLORS } from "../../constants";
import styles from "./welcome.style";
import { useNavigation } from "@react-navigation/native";
import Carousel from "./Carousel";

const Welcome = () => {
  const Navigation = useNavigation();
  return (
    <View>
        <View style={styles.searchContainer}>

          <View style={styles.searchWarpper}>
            <TextInput
              style={styles.searchInput}
              value=""
              placeholder="What are you looking for "
              onPressIn={() => {Navigation.navigate("Search")}}
            />
          </View>
          <View>
            <TouchableOpacity style={styles.searchBtn}>
            <Feather name="search" size={24} style={styles.itemSearch} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.container}>
        <Text style={styles.WelcomeTxt(COLORS.black, SIZES.xSmall-10)}>
          
         Find the best cats 
        </Text>
        <Text style={styles.WelcomeTxt(COLORS.primary, -10)}>
          in the world
        </Text>

        
        
      </View>
    </View>
  );
};

export default Welcome;
