import { StyleSheet,View,Text } from "react-native";
import {COLORS,SIZES} from '../constants/index'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textStyle:{
      fontFamily:'extrbold',
      fontSize:40
    },
    appBarWarpper:{
        marginHorizontal:20,
        marginTop:SIZES.small,
        flex:1
    },
    appBar:{
        height:50,
        color:'white',
        width:'auto',
        flexDirection:'row',
        justifyContent:"space-between",
        backgroundColor:'white',
        alignItems:'center',
        position:'relative',
    },
    location: {
        fontFamily:'semibold',
        fontSize:SIZES.medium,
        color:COLORS.gray
    },
    cartCount: {
        position:'absolute',
        bottom:16,
        width:16,
        height:16,
        borderRadius:8,
        alignItems:'center',
        backgroundColor:'green',
        justifyContent:'center',
        zIndex:999
    },
    cartNumber:{
        fontFamily:'reguler',
        fontWeight:'600',
        fontSize:10,
        color:COLORS.lightWhite

    }

  });

  export default styles