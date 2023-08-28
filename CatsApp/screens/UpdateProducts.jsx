import { View, Text, Image, TouchableOpacity,StyleSheet, TextInput, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';
import { COLORS, SIZES } from '../constants';


const UpdateProducts = ({ route, navigation }) => {
  const { item } = route.params;
  console.log(item)
  console.log(item._id)
  
  const [selectedImage, setSelectedImage] = useState(null);
  const [Title, setTitle] = useState('');
  const [Price, setPrice] = useState('');
  const [Breed, setBreed] = useState('');
  const [Description, setDescription] = useState('');

  useEffect(() => {
    
    axios.get(`http://192.168.100.244:3000/api/products/${item._id}`)
      .then(response => {
        const { Title, Breed, Price, Description, ImageUrl } = response.data;
        setTitle(Title);
        setBreed(Breed);
        setPrice(Price);
        setDescription(Description);
        setSelectedImage(ImageUrl);
      })
      .catch(error => {
        console.error("Error fetching product details:", error);
      });
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri);
    }
  };

  const updateProduct = async () => {
    try {
      const response = await axios.put(`http://192.168.100.244:3000/api/products/${item._id}`, {
        Title,
        Breed,
        Price,
        Description,
        ImageUrl: selectedImage,
      },{
        headers: {
          'Content-Type': 'application/json', 
        },
      });

      console.log('Product updated:', response.data);
      
      navigation.navigate('Home')
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <View style={styles.container}>
      {selectedImage && (
        <Image source={{ uri: selectedImage }} style={styles.image} />
      )}
      
      <TouchableOpacity onPress={pickImage}>
        <Text  style={styles.button} >Select Image</Text>
        </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={Title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={Price}
        onChangeText={setPrice}
      />
      <TextInput
        style={styles.input}
        placeholder="Breed"
        value={Breed}
        onChangeText={setBreed}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={Description}
        onChangeText={setDescription}
        multiline
      />
      {selectedImage && (
        <TouchableOpacity onPress={updateProduct}>
        <Text  style={styles.button} >Update Product</Text>
        </TouchableOpacity>
      )}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
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
    width:160,
    color:'white',
    backgroundColor:COLORS.primary,
    borderRadius:10,
    padding:15,
    letterSpacing:1,
    fontSize:SIZES.medium-2,
    fontWeight:'bold',
    marginBottom:5
    

  }
  
});

export default UpdateProducts;
