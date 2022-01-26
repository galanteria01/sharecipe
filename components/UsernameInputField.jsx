import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { COLORS } from '../constants/theme'

export default function UsernameInputField({title,label,value, setValue, placeholder, style}) {
    return (
        <View style={style}>
            <Text style={styles.text}>
                {title}
            </Text>
            <TextInput
                label={label}
                placeholder={placeholder}
                style={styles.input}
                value={value}
                onChangeText={(e) => setValue(e.target.value)}
            />
         </View>
    )
}

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
