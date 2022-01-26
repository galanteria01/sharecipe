import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { AirbnbRating, Avatar, Button, Card, Icon } from 'react-native-elements'
import food from '../assets/food.jpg'
import { COLORS } from '../constants/theme'


const HomeRecipeCard = () => {
  return (
    <Card containerStyle={styles.card}>
      <View style={styles.head}>
        <View style={styles.leftHead}>
          <Avatar
            size={24}
            rounded
            icon={{ name: 'user', type: 'font-awesome' }}
            containerStyle={{ backgroundColor: COLORS.green }}
          />
          <Text
            style={styles.username}
          >
            Shoury Sharma
          </Text>
        </View>
        <View style={styles.rightHead}>
          <Text style={styles.time}>2 min ago</Text>
          <Icon
            name='ellipsis-v'
            type='font-awesome'
            color='#212121'
            onPress={() => console.log('hello')}
          />
        </View>
      </View>
      <Card.Divider />
      <View style={styles.imageBox}>
        <Image
          source={food}
          style={styles.image}
        />
      </View>
      <Card.Divider />
      <View style={styles.bottom}>
        <AirbnbRating
          size={28}
          selectedColor='#3eb489'
          showRating={false}
        />
        <Button
          buttonStyle={styles.button}
          title='View Recipe'
        />
      </View>
    </Card>
  )
}

export default HomeRecipeCard

const styles = StyleSheet.create({
  card: {
    borderRadius: 8
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10
  },
  leftHead: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightHead: {
    flexDirection: 'row',
  },
  username: {
    marginLeft: 10,
    fontWeight: '700',
    fontSize: 16
  },
  imageBox: {
    padding: 10,
    alignItems: 'center'
  },
  image: {

  },
  time: {
    marginRight: 10,
    fontWeight: '700',
    fontSize: 16
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rating: {

  },
  button: {
    backgroundColor: COLORS.green,
  }
})
