import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from '../screens/app/Home'

const AppStacks = () => {
    const AppStack = createNativeStackNavigator()
    return (
        <AppStack.Navigator>
            <AppStack.Screen name="Home" component={Home} />
        </AppStack.Navigator>
    )
}

export default AppStacks

