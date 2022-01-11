import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useReducer } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Firebase from './services/firebase';
import AppStacks from './stacks/AppStacks';
import AuthStacks from './stacks/AuthStacks';
import AuthContext from './context/AuthContext';
import Splash from './screens/Splash';
import Signin from './screens/auth/Signin';
import * as SecureStore from 'expo-secure-store';

export default function App() {

  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_USER':
          return {
            ...prevState,
            user: action.user,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            user: action.user,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            user: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      user: null,
    }
  );

  useEffect(() => {
    const bootstrapAsync = async () => {
      let user;

      try {
        user = await SecureStore.getItemAsync('user');
      } catch (e) {
        console.log(e);
      }

      dispatch({ type: 'RESTORE_USER', user });
    };
    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async data => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token
        SecureStore.setItemAsync('user', user);
        dispatch({ type: 'SIGN_IN', user: data.user });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token
        SecureStore.setItemAsync('user', user);
        dispatch({ type: 'SIGN_IN', user: data.user });
      },
    }),
    []
  );

  if (state.isLoading) {
    return (
      <Splash />
    )
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <SafeAreaProvider>
          {state.user == null ? (
            <AuthStacks />
          ) : (
            <AppStacks />
          )}
        </SafeAreaProvider>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
