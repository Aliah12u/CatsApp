import { StatusBar } from 'expo-status-bar';
import { SafeAreaViewBase, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import BottomTabNavigatoinbar from './navigations/BottomTabNavigatoinbar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AllCats } from './screens';
import ProductDetails from './screens/ProductDetails';
import UpdateProducts from './screens/UpdateProducts';


export default function App() {

  const [fontsLoaded] = useFonts({
    'reguler': require('./assets/fonts/Poppins-Regular.ttf'),
    'bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'extrabold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
    'light': require('./assets/fonts/Poppins-Light.ttf'),
    'medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'semibold': require('./assets/fonts/Poppins-SemiBold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }



const stack = createNativeStackNavigator()


  return (

    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Bottom navigations" 
        component={BottomTabNavigatoinbar} 
        options={{headerShown:false}}/>
        <stack.Screen name="ProductDetails" component={ProductDetails} options={{headerShown:false}}/>
        <stack.Screen name="AllCats" component={AllCats} options={{headerShown:false}}/>
        <stack.Screen name="UpdateProducts" component={UpdateProducts} options={{headerShown:false}}/>
        
      </stack.Navigator>
    </NavigationContainer>
    
  );
}

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
  }
});

