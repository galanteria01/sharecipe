import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { addDoc, collection, getFirestore } from "firebase/firestore"

const AddRecipe = () => {

  const db = getFirestore()

  const addRecipe = async () => {
    try {
      const recipe = await addDoc(collection(db, "recipes"), {
        foodImage: '',
        foodName: '',
        foodDescription: '',
        foodIngredients: [],
        foodInstructions: [],
        foodTags: [],
        foodCategory: '',
        foodCookTime: '',
        foodRating: '',
      })
      console.log(recipe.id)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <View style={styles.root}>
      <Text>Hello create recipe</Text>
    </View>
  );
};

export default AddRecipe;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignContent: 'center'
  }
});
