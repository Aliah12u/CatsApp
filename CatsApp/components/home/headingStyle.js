import { StyleSheet,View,Text } from "react-native";
import { COLORS,SIZES } from "../../constants";

const styles = StyleSheet.create({
    container:{
        marginTop:SIZES.medium,
        marginHorizontal:10},
    header:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    headerTitle:{
        fontFamily:'semibold',
        fontSize:SIZES.xLarge -2
    },


})

export default styles;