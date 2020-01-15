import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { CATEGORIES, MEALS } from '../data/dummy-data'
import Colors from '../constants/Colors'

const CategoryMealScreen = ({ navigation }) => {
  const renderMealItem = ({ item }) => {
    return <View><Text>{item.title}</Text></View>
  }
  const categoryId = navigation.getParam('categoryId')
  const meals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0)

  return (
    <View style={styles.screen}>
      <FlatList data={meals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem} />
    </View>
  );
};

CategoryMealScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: CATEGORIES.find(category => navigation.getParam('categoryId') === category.id).title
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoryMealScreen;
