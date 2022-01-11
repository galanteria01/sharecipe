import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Tabs from '../screens/app/Tabs'

const AppStacks = () => {
    const AppStack = createNativeStackNavigator()
    return (
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
            <AppStack.Screen name="Tabs" component={Tabs} />
        </AppStack.Navigator>
    )
}

export default AppStacks

