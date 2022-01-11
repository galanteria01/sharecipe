import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Signin from '../screens/auth/Signin'
import Signup from '../screens/auth/Signup'
import Welcome from '../screens/auth/Welcome'


const AuthStack = createNativeStackNavigator()
export default function AuthStacks() {
    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Welcome'>
            <AuthStack.Screen name="Welcome" component={Welcome} />
            <AuthStack.Screen name="Signin" component={Signin} />
            <AuthStack.Screen name="Signup" component={Signup} />
        </AuthStack.Navigator>
    )
}


