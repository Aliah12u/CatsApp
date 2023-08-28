import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../screens/home.style"
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants";
import { Entypo } from "@expo/vector-icons";
const  Header= () => {
  return (
    
      <View style={styles.appBarWarpper}>
        
        <View style={styles.appBar}>

          <Entypo name="location-pin" size={24} color={COLORS.gray} />
          <Text style={styles.location}>Shangue china</Text>

          <View style={{ alignItems: "flex-end" }}>

            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>8</Text>
            </View>

            <TouchableOpacity>
            <Entypo name="shopping-bag" size={24} />
            </TouchableOpacity>
            
          </View>
        </View>
    
      </View>
      
  );
};

export default Header;
