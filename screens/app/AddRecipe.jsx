import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { TouchableOpacity } from 'react-native-web';

const initialValues = {
  foodImage: '',
  foodName: '',
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
      <TouchableOpacity onPress={ () => {} }>
        <Text>Add Image</Text>
      </TouchableOpacity>
      <TextInput
        value={foodName}
        onChangeText={(e) => setFoodName(e)}
      />
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
