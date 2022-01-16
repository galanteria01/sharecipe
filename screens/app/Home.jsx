import React, { useContext } from 'react'
import { Button, StyleSheet, Text, View, ScrollView } from 'react-native'
import { getAuth, signOut } from 'firebase/auth'
import AuthContext from '../../context/AuthContext'
import { SafeAreaView } from 'react-native-safe-area-context'
import HomeRecipeCard from '../../components/HomeRecipeCard'
const Home = () => {
    const auth = getAuth()
    const { signout } = useContext(AuthContext)
    const onSignOut = () => {
        signOut(auth).then(() => {
            signout()
        })
    }
    return (
        <ScrollView style={styles.root}>
            <HomeRecipeCard />
            <HomeRecipeCard />
            <HomeRecipeCard />
            <HomeRecipeCard />
            <HomeRecipeCard />
            <HomeRecipeCard />
            <HomeRecipeCard />
            
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    root: {
        
    }
})
