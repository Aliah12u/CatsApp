import { View, Text, FlatList, ActivityIndicator, ScrollView } from 'react-native'
import React from 'react'
import ProductRow from './ProductRow'
import { COLORS, SIZES } from '../../constants'
import UseFetch from '../../hook/UseFetch'
import Profile from '../../screens/Profile'

const ProductRowCard = () => {
  const {data,isLoading ,error} = UseFetch()
   
  return (
    <View>
      {isLoading ? 
    (<ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary}/>):
    error?(<Text>something wrong</Text>):
    (  
     <FlatList 
     data={data}
     keyExtractor={ (item) => item._id}
     renderItem={ ({item}) => <ProductRow item={item}/> }
     
     contentContainerStyle={{columnGap:SIZES.medium}}
    
     
     />
     
    )}
    </View>

)
    }

export default ProductRowCard;

