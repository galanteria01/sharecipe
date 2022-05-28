import { StyleSheet, Text, TextInput, View, TouchableOpacity, Button } from 'react-native';
import React from 'react';
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { SafeAreaView } from 'react-native-safe-area-context';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';

const initialValues = {
  foodImage: '',
  foodName: '',
  foodDescription: '',
  foodIngredients: [],
  foodInstructions: [],
  foodTags: [],
  foodCategory: '',
  foodCookTime: '',
  foodRating: '',
}

const AddRecipe = () => {
  const [values, setValues] = React.useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value
    })
  }

  const db = getFirestore()

  const addRecipe = async () => {
    try {
      const recipe = await addDoc(collection(db, "recipes"), {
        foodImage: values.foodImage,
        foodName: values.foodName,
        foodDescription: values.foodDescription,
        foodIngredients: values.foodIngredients,
        foodInstructions: values.foodInstructions,
        foodTags: values.foodTags,
        foodCategory: values.foodCategory,
        foodCookTime: values.foodCookTime,
        foodRating: values.foodRating,
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <SafeAreaView style={styles.root}>
      <View>
        <Text style={styles.header}>
          Add Recipe
        </Text>
      </View>
      <View style={styles.center}>
        <TouchableOpacity onPress={() => { }}>
          <Avatar />
        </TouchableOpacity>
        <TextInput
          value={values.foodName}
          name="foodName"
          onChangeText={handleInputChange}
          placeholder="Food Name"
        />
        <TextInput
          value={values.foodDescription}
          name="foodDescription"
          onChangeText={handleInputChange}
          placeholder="Food Name"
        />
        <TextInput
          value={values.foodIngredients}
          name="foodIngredients"
          onChangeText={handleInputChange}
          placeholder="Food Name"
        />
        <TextInput
          value={values.foodCategory}
          name="foodCategory"
          onChangeText={handleInputChange}
          placeholder="Food Name"
        />
      </View>
      <View>
        <Button title="Add Recipe" onPress={addRecipe} />
      </View>
    </SafeAreaView>
  );
};

export default AddRecipe;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent: 'center',
    justifyContent: 'space-between'
  },
  center: {
    margin: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    margin: 10,
  }
});
