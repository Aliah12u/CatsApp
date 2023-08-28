import { StyleSheet,View,Text } from "react-native";
import {COLORS,SIZES} from '../constants/index'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      image: {
        width: '100%',
        height: 200,
        marginBottom: 16,
      },
      input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 10,
        marginBottom: 16,
        width: 200,
      },
      button: {
        width:150,
        color:'white',
        backgroundColor:COLORS.primary,
        borderRadius:10,
        padding:15,
        letterSpacing:1,
        fontSize:SIZES.medium-2,
        fontWeight:'bold',
        marginBottom:5,
       
        
    
      }

})

export default styles;