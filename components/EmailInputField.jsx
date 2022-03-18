import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { COLORS } from '../constants/theme'

const EmailInputField = ({ title, label, value, onChange, placeholder, style }) => {
    return (
        <View style={style}>
            <Text style={styles.text}>
                {title}
            </Text>
            <TextInput
                label={label}
                placeholder={placeholder}
                autoComplete='email'
                style={styles.input}
                value={value}
                onChangeText={onChange}
            />
        </View>
    )
}

export default EmailInputField

const styles = StyleSheet.create({
    input: {
        padding: 12,
        fontWeight: '600',
        fontSize: 18,
        borderRadius: 12,
        color: COLORS.green,
        backgroundColor: '#e4e4e4'
    },
    text: {
        fontSize: 18,
        color: '#585858',
        fontWeight: '700',
        padding: 8
    }
})
