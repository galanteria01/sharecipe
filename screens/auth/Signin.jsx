import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import BigGreenButton from '../../components/BigGreenButton';
import EmailInputField from '../../components/EmailInputField';
import PasswordInputField from '../../components/PasswordInputField';
import { COLORS } from '../../constants/theme';
import AuthContext from '../../context/AuthContext';

const Signin = ({navigation}) => {

  const { signIn } = useContext(AuthContext);
  const auth = getAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => {
    try {
      if (email !== '' && password !== '') {
        signInWithEmailAndPassword(auth, email, password).then((userCredentials) => {
          const user = userCredentials.user;
          signIn(user);
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
        <EmailInputField
          title="Email"
          style={styles.input}
          label="Email"
          value={email}
          onChange={(input) => setEmail(input)}
          placeholder="Enter your email"
        />
        <PasswordInputField
          title="Password"
          style={styles.input}
          label="Password"
          value={password}
          onChange={(input) => setPassword(input)}
          placeholder="Enter your password"
          secureTextEntry={true}
        />
      </View>
      <View style={styles.bottom}>
        <BigGreenButton text={'Sign In'} onPress={onLogin} />
        <View style={styles.bottomBox}>
          <Text>Don't have an account?</Text>
          <Text style={styles.greenText} onPress={() => navigation.navigate('Signup')}>Sign up</Text>
        </View>
      </View>
    </View>
  )
}

export default Signin

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
    color: COLORS.green,
    fontWeight: '700',
    marginLeft: 10
  }
})
