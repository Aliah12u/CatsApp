import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import  Header  from '../components/Header';
import  Welcome  from "../components/home/Welcome";
import Carousel from '../components/home/Carousel';
import Headings from '../components/home/Headings';
import ProductRow from '../components/home/ProductRow';
import ProductRowCard from '../components/home/ProductRowCard';
import UseFetch from '../hook/UseFetch';

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      <Welcome/>
      <Carousel/>
      <Headings/>
      <ProductRowCard/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home