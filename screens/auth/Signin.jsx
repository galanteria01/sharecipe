import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import BigGreenButton from '../../components/BigGreenButton';
import AuthContext from '../../context/AuthContext';

export default function Signin() {

  const { signIn } = useContext(AuthContext);
  const auth = getAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = async () => {
    try {
      if (email !== '' && password !== '') {
        await signInWithEmailAndPassword(email, password);
        signIn(auth.currentUser);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View style={styles.root}>
      <View style={styles.top}>
        <Text style={styles.head}>Welcome back!</Text>
        <Text>We are happy to see you again. You can login
          again and read more recipe and share
          your owns.</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Enter your email"
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Enter your password"
          secureTextEntry={true}
        />
      </View>
      <View style={styles.bottom}>
        <BigGreenButton text={'Sign In'} onPress={onLogin} />
        <View>
          <Text>Don't have an account?</Text>
          <Text>Sign up</Text>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {

  },
  form: {

  },
  head: {

  },
  bottom: {

  }
})
