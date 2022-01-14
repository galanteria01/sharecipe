import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import BigGreenButton from '../../components/BigGreenButton';
import EmailInputField from '../../components/EmailInputField';
import PasswordInputField from '../../components/PasswordInputField';
import UsernameInputField from '../../components/UsernameInputField';
import AuthContext from '../../context/AuthContext';

export default function Signup({navigation}) {

  const { signUp } = useContext(AuthContext);
  const auth = getAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignup = async () => {
    try {
      if (email !== '' && password !== '') {
        await createUserWithEmailAndPassword(auth, email, password).then((userCredentials) => {
            const user = userCredentials.user;
            signUp(user);
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View style={styles.root}>
      <View style={styles.top}>
        <Text style={styles.head}>Welcome back!</Text>
        <Text style={styles.subHead}>We are happy to see you again. You can login
          again and read more recipe and share
          your owns.</Text>
      </View>
      <View style={styles.form}>
      <UsernameInputField
          title="Email"
          style={styles.input}
          label="Email"
          value={email}
          setValue={setEmail}
          placeholder="Enter your email"
        />
        <EmailInputField
          title="Email"
          style={styles.input}
          label="Email"
          value={email}
          setValue={setEmail}
          placeholder="Enter your email"
        />
        <PasswordInputField
          title="Password"
          style={styles.input}
          label="Password"
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry={true}
        />
      </View>
      <View style={styles.bottom}>
        <BigGreenButton text={'Sign Up'} onPress={onSignup} />
        <View style={styles.bottomBox}>
          <Text>Already have an account?</Text>
          <Text style={styles.greenText} onPress={() => navigation.goBack()}>Sign in</Text>
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
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingTop: 80,
    paddingBottom: 60
  },
  top: {
    
  },
  form: {
    width: '100%'
  },
  input: {
    marginVertical: 10
  },
  head: {
    fontWeight: '700',
    fontSize: 32,
    marginBottom: 30
  },
  subHead: {

  },
  bottom: {
    width: '100%'
  },
  bottomBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  greenText: {
    color: '#3eb489',
    fontWeight: '700',
    marginLeft: 10
  }
})
