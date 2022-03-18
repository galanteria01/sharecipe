import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Splash = () => {
    return (
        <View style={styles.root}>
            <Text>Loading</Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
