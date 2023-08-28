import { StyleSheet,View,Text } from "react-native";
import { COLORS,SIZES } from "../../constants";

const styles = StyleSheet.create({
    container:{width:"100%"},
    WelcomeTxt:(color,Top)=>({
        fontFamily:"bold",
        fontSize:SIZES.xxLarge-8,
        marginTop:Top,
        color:color,
        marginHorizontal:12
    }),
    searchContainer:{
        flexDirection:"row",
        justifyContent:'center',
        alignContent:'center',
        backgroundColor:'white',
        borderRedius:SIZES.medium,
        marginVertical:SIZES.medium ,
        height:40,
        marginHorizontal:12,
        borderRadius:10,
        
    },
    itemSearch:{
        marginHorizontal:10,
        color:COLORS.white,
        
    },
    searchWarpper:{
        flex:1,
        backgroundColor:'white',
        marginRight:SIZES.small,
        borderRadius:SIZES.small,
        
    },
    searchInput:{
        fontFamily:'reguler',
        width:'100%',
        paddingHorizontal:SIZES.small,
        marginTop:8
    },
    searchBtn:{
        width:50,
        height:"100%",
        borderRadius:SIZES.medium *2,
        backgroundColor:COLORS.primary,
        justifyContent:"center",
        alignItems:'center'

    },
    searchImage:{resizeMode:'contain',
                width:SIZES.width-100,
            height:SIZES.height-300,
        opacity:0.9}
    
})

export default styles;