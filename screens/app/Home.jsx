import React from 'react'
import { StyleSheet, View, ScrollView, RefreshControl } from 'react-native'
import HomeRecipeCard from '../../components/HomeRecipeCard'
import { COLORS } from '../../constants/theme'
import { useNavigation } from '@react-navigation/native'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { useEffect } from 'react'
import { FAB } from '@rneui/base'

const Home = () => {
    const navigation = useNavigation()
    const [visible, setVisible] = React.useState(true);
    const [refreshing, setRefreshing] = React.useState(false);
    const db = getFirestore();
    const getRecipes = async () => {
        const recipesRef = collection(db, 'recipes');
        const recipes = await getDocs(recipesRef);
        console.log(recipes)
    }

    useEffect(() => {
        getRecipes();
    }, [])

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    return (
        <View>
            <ScrollView style={styles.root}>
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
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
