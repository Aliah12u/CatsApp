import { StyleSheet,View,Text } from "react-native";
import { COLORS,SIZES } from "../constants";

const styles = StyleSheet.create({

    container:{
        
        backgroundColor:'red',  
    },
    image: {
        width: '100%',
        height: 400,
        marginBottom: 8,
        borderRadius: 8,
      },
    body:{
        
        backgroundColor:'white',
        borderTopEndRadius:40,
        borderTopLeftRadius:40,
        padding:30,
        marginTop:-60
    },
    titleBody:{
        fontSize:SIZES.xxLarge -10,
        marginBottom:10
    },
    titleItem:{
        color:COLORS.gray,
        marginRight:10,
        
    },
    value:{
        fontSize:SIZES.medium
    },
    Description:{
        fontSize:SIZES.large,
        marginTop:10,
        marginBottom:10
    },
    DescriptionValue:{
        color:COLORS.gray,
        fontSize:SIZES.medium,
        letterSpacing:.5,
        lineHeight:22
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
      },
      button: {
        backgroundColor: COLORS.primary,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginBottom:10
      },
      buttonText: {
        color: '#fff',
        fontSize: SIZES.large,
        fontWeight: 'bold',
      },

   
});

export default styles;