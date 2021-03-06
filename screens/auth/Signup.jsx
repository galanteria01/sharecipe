import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, {  } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import BigGreenButton from '../../components/BigGreenButton';
import EmailInputField from '../../components/EmailInputField';
import PasswordInputField from '../../components/PasswordInputField';
import UsernameInputField from '../../components/UsernameInputField';
import { COLORS } from '../../constants/theme';
import AuthContext from '../../context/AuthContext';

const initialValues = {
  username: '',
  email: '',
  password: '',
  conPassword: ''
}

const Signup = ({ navigation }) => {

  const [valus, setValues] = React.useState(initialValues);
  const { signUp } = React.useContext(AuthContext);
  const auth = getAuth();

  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [conPassword, setConPassword] = React.useState('');

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
        <Text style={styles.head}>Create an Account!</Text>
        <Text style={styles.subHead}>Create an account and start sharing your
          recipes and taking inspiration from others</Text>
      </View>
      <View style={styles.form}>
        <UsernameInputField
          title="Username"
          style={styles.input}
          label="Username"
          value={username}
          onChange={(input) => setUsername(input)}
          placeholder="Enter your username"
        />
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
        <PasswordInputField
          title="Password"
          style={styles.input}
          label="Password"
          value={conPassword}
          onChange={(input) => setConPassword(input)}
          placeholder="Confirm password"
          secureTextEntry={true}
        />
      </View>
      <View style={styles.bottom}>
        <BigGreenButton text={'Sign Up'} onPress={onSignup} />
        <View style={styles.bottomBox}>
          <Text>Already have an account?</Text>
          <Text style={styles.greenText} onPress={() => navigation.navigate('Signin')}>Sign in</Text>
        </View>
      </View>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingTop: 80,
    paddingBottom: 40
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
