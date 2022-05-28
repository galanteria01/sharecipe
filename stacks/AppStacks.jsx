import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import AddRecipe from '../screens/app/AddRecipe'
import Settings from '../screens/app/Settings'
import Tabs from '../screens/app/Tabs'
import ViewRecipe from '../screens/app/ViewRecipe'

const AppStack = createNativeStackNavigator()
 
const AppStacks = () => {
    return (
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
            <AppStack.Screen name="Tabs" component={Tabs} />
            <AppStack.Screen name='Settings' component={Settings} />
            <AppStack.Screen name='AddRecipe' component={AddRecipe} />
            <AppStack.Screen name='ViewRecipe' component={ViewRecipe} />
        </AppStack.Navigator>
    )
}

export default AppStacks

