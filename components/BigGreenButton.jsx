import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { COLORS } from '../constants/theme'

export default function BigGreenButton({ text, onPress }) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.button}
      onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.green,
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
