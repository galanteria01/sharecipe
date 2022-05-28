import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppStacks from './stacks/AppStacks';
import AuthStacks from './stacks/AuthStacks';
import AuthContext from './context/AuthContext';
import Splash from './screens/Splash';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './services/firebase';
import { getAuth } from 'firebase/auth';

export default function App() {

  const [state, dispatch] = React.useReducer(
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

  React.useEffect(() => {
    initializeApp(firebaseConfig);
    const bootstrapAsync = async () => {
      let user;

      try {
        user = getAuth().currentUser;
      } catch (e) {
        console.log(e);
      }

      dispatch({ type: 'RESTORE_USER', user });
    };
    bootstrapAsync();
 
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        dispatch({ type: 'SIGN_IN', user: data.user });
      },
      signout: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async data => {
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
          {state.user === null ? (
            <AuthStacks />
          ) : (
            <AppStacks />
          )}
        </SafeAreaProvider>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
