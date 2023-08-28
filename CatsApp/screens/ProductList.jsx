import React from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants';
import ProductRow from '../components/home/ProductRow';
import UseFetch from '../hook/UseFetch';
import ProductRowCard from '../components/home/ProductRowCard';


const ProductList = () => {
  const { data, isLoading, error } = UseFetch();

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item }) => <ProductRow item={item} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        keyExtractor={(item) => item._id.toString()} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    paddingTop: SIZES.xxLarge,
    paddingLeft: SIZES.small / 2,
  },
  contentContainer: {
    alignItems: 'center',
  },
  separator: {
    height: 16,
  },
});

export default ProductList;
