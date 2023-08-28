import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather, Ionicons } from "@expo/vector-icons";
import styles from './headingStyle';
import { COLORS } from '../../constants';
import { useNavigation } from '@react-navigation/native';
const Headings = () => {
const navigation = useNavigation(); 
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerTitle}> All Cats</Text>
            <TouchableOpacity onPress={()=>{navigation.navigate("AllCats")}}>
                <Ionicons name="ios-grid" size={24} color={COLORS.primary}/>
            </TouchableOpacity>
        </View>
      
    </View>
  )
}


export default Headings

