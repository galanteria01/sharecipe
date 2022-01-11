import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function BigGreenButton({ text, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3eb489',
    padding: 16,
    borderRadius: 50,
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
  }
})
