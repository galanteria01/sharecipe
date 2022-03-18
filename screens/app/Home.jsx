import React, { useContext } from 'react'
import { Button, StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import { getAuth, signOut } from 'firebase/auth'
import AuthContext from '../../context/AuthContext'
import { SafeAreaView } from 'react-native-safe-area-context'
import HomeRecipeCard from '../../components/HomeRecipeCard'
import { COLORS } from '../../constants/theme'
import { FAB } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const [visible, setVisible] = React.useState(true);
    const navigation = useNavigation()

    return (
        <View>
            <ScrollView style={styles.root}>
                <HomeRecipeCard />
                <HomeRecipeCard />
                <HomeRecipeCard />
                <HomeRecipeCard />
                <HomeRecipeCard />
                <HomeRecipeCard />
            </ScrollView>
            <FAB
                visible={true}
                onPress={() => navigation.navigate('AddRecipe')}
                placement="right"
                icon={{ name: 'add', color: 'white' }}
                color={COLORS.green}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    root: {

    }
})
