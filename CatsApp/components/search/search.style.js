import { StyleSheet,View,Text } from "react-native";
import { COLORS,SHADOWS,SIZES } from "../../constants";

const styles = StyleSheet.create({
    container:{flex:1,
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:SIZES.small,
    flexDirection:'row',
    padding:SIZES.medium,
    borderRadius:SIZES.small,
    backgroundColor:'#fff',
    ...SHADOWS.medium,
    shadowColor:COLORS.lightWhite
    },
    image:{
        width:70,
        backgroundColor:COLORS.secondary,
        borderRadius:SIZES.medium,
        justifyContent:'center',
        alignContent:'center'
    },
    inImage:{
        width:'100%',
        height:60,
        borderRadius:SIZES.small,
        resizeMode:'cover'
    },
    textContainer:{
        flex:1,
        marginHorizontal:SIZES.medium
    },
    catTitle:{
        fontSize:SIZES.medium,
        fontFamily:'bold',
        color:COLORS.primary
    },
    Breed:{
        fontSize:SIZES.small +2,
        fontFamily:'reguler',
        color:COLORS.gray,
        marginTop:3
    }
    

})

export default styles