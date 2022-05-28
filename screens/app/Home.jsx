import React from 'react'
import { StyleSheet, View, ScrollView, RefreshControl } from 'react-native'
import HomeRecipeCard from '../../components/HomeRecipeCard'
import { COLORS } from '../../constants/theme'
import { FAB } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const navigation = useNavigation()
    const [visible, setVisible] = React.useState(true);
    const [refreshing, setRefreshing] = React.useState(false);
    
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
