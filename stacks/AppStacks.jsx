import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Settings from '../screens/app/Settings'
import Tabs from '../screens/app/Tabs'

const AppStacks = () => {
    const AppStack = createNativeStackNavigator()
    return (
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
            <AppStack.Screen name="Tabs" component={Tabs} />
            <AppStack.Screen name='Settings' component={Settings} />
        </AppStack.Navigator>
    )
}

export default AppStacks

