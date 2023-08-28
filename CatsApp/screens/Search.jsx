import {View,Text, TouchableOpacity,TextInput,FlatList,Image} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../components/home/welcome.style";
import { Feather, Ionicons } from "@expo/vector-icons";
import { SIZES, COLORS } from "../constants";
import ProductRow from "../components/home/ProductRow";
import UseFetch from "../hook/UseFetch";
import axios from "axios";
import SearchCard from "../components/search/SearchCard";


const Search = () => {
  const[value,setValue] = useState('');
  const[searchResult,setSearchResult] = useState([]);
  const { data, isLoading, error } = UseFetch();
  
  const SearchValue = async ()=> {
    const response = await axios.get(`http://192.168.100.244:3000/api/products/search/${value}`)
    try {
      setSearchResult(response.data)
     
    } catch (error) {
      console.log("Failed to get products" ,error)
    }
  }

  return (
    <SafeAreaView>
      <View>
        <View style={styles.container}>
          <View style={styles.searchContainer}>
            <View style={styles.searchWarpper}>
              <TextInput
                style={styles.searchInput}
                value={value}
                onChangeText={setValue}
                placeholder=" What are you looking for "
                
                
              />
              
            </View>
            <View>
              <TouchableOpacity onPress={SearchValue} style={styles.searchBtn}>
                <Feather
                  name="search"
                  size={SIZES.xLarge}
                  color={COLORS.white}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        
      </View>
      {searchResult.length === 0? (
        <View style={{flex:1}}>
          <Image
          source={require('../assets/images/Pose23.png')}
          style={styles.searchImage}
          
          />

        </View>
      ):
      ( <FlatList
         data={searchResult}
         keyExtractor={(item) => item._id}
         renderItem={({item})=> (<SearchCard item={item}/>
         
         )}
        
          />
      )}
    </SafeAreaView>
  );
};

export default Search;
