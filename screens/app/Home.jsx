import React, { useContext } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { getAuth, signOut } from 'firebase/auth'
import AuthContext from '../../context/AuthContext'
import { SafeAreaView } from 'react-native-safe-area-context'
const Home = () => {
    const auth = getAuth()
    const { signout } = useContext(AuthContext)
    const onSignOut = () => {
        signOut(auth).then(() => {
            signout()
        })
    }
    return (
        <SafeAreaView>
            <Text>Home</Text>
            <Button onPress={() => { onSignOut() }} title="SignOut" />
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({})
