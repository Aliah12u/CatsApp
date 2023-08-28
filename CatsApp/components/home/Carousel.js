import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { COLORS,SIZES } from '../../constants'
import { SliderBox } from 'react-native-image-slider-box'

const Carousel = () => {
    const slider=[
        'https://images.pexels.com/photos/16579464/pexels-photo-16579464/free-photo-of-cat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/13369519/pexels-photo-13369519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/5270662/pexels-photo-5270662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        

    ]
  return (
    <View style={styles.carouselContainer}>
        <SliderBox images={slider}
         dotColor="#ffff"
         inactiveDotColor="#90A4AE"
         sliderBoxHeight={200}
         autoplay
         circleLoop
        ImageComponentStyle ={{borderRadius:15,width:'95%',marginTop:10}}
        />
    </View>
  )
}

export default Carousel
const styles = StyleSheet.create({
    carouselContainer:{
        flex:1,
       
        
        
        
    }
})