import React from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'
import BigGreenButton from '../../components/BigGreenButton'
import chefWelcome from '../../assets/chef-welcome.png'
import { COLORS } from '../../constants/theme'
import LottieView from 'lottie-react-native'

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <View>
        <Text style={styles.heading}>Welcome to Sharecipe</Text>
        <Text style={styles.description}>Here we will provide you the amazing
          recipe of various food and their creaters
          can connect and provide you additional
          help regarding those.</Text>
      </View>
      {/* <Image source={chefWelcome} style={styles.image} /> */}
      <LottieView style={styles.image} source={require('../../assets/lottie/healthy-or-junk-food.json')} autoPlay loop />
      <View>
        <BigGreenButton style={styles.button} text="Create an Account" onPress={() => { navigation.navigate('Signup') }} />
        <View style={styles.row}>
          <Text>Already have an account?</Text>
          <Text onPress={() => { navigation.navigate('Signin') }} style={styles.textButton}>Sign In</Text>
        </View>
      </View>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingBottom: 40,
    paddingTop: 60
  },
  heading: {
    fontSize: 42,
    textAlign: 'left',
    fontWeight: '700',
    marginBottom: 20
  },
  description: {
  },
  image: {
    marginTop: 40
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20
  },
  textButton: {
    color: COLORS.green,
    marginHorizontal: 10,
  }
})
