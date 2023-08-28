import React, { useState } from 'react';
import { View, Text, Button, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from './profile.style';
import axios from 'axios';

const UploadImageScreen = ({navigation }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [typeImage, setTypeImage] = useState(null);
  const [nameImage, setNameImage] = useState(null);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [breed, setBreed] = useState('');
  const [description, setDescription] = useState('');

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.assets[0].uri);
      setTypeImage(result.assets[0].type);
      setNameImage(result.assets[0].fileName);
      console.log(result.assets)
      console.log(result.assets[0].type)
      console.log(result.assets[0].name)

      

      
    }
  };

  const uploadImage = async () => {
    try {
      const response = await axios.post('http://192.168.100.244:3000/api/products/', {
        Title:title,
        Breed: breed,
        Price: price,
        Description: description,
        ImageUrl: selectedImage, 
      }, {
        headers: {
          'Content-Type': 'application/json', 
        },
      });
      navigation.navigate('Home')
      console.log('Upload response:', response.status); 
    } catch (error) {
      console.error('Upload error:', error);
    }

    
  };

  return (
    <View style={styles.container}>
      {selectedImage && (
        <Image source={{ uri: selectedImage }} style={styles.image} />
      )}
      <TouchableOpacity onPress={pickImage}>
        <Text style={styles.button}>Select Image</Text>
        </TouchableOpacity>
      
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
      />
      <TextInput
        style={styles.input}
        placeholder="Breed"
        value={breed}
        onChangeText={setBreed}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      {selectedImage && (
        <TouchableOpacity  onPress={uploadImage}>
        <Text style={styles.button}>Upload Image</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};



export default UploadImageScreen;
