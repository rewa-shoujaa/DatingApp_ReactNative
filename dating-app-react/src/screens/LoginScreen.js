import React, { useState } from 'react'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'



export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    console.log(email.value)
    console.log(password.value)


    //fetch('http://127.0.0.1:8000/api/login', {
    //  method: 'POST',
    //  headers: {
    //    Accept: 'application/json',
    //    'Content-Type': 'application/json'
    //  },
    //  body: JSON.stringify({
    //    "email": email.value,
    //    "password": password.value,
    //  }),
    //})
    //.then(res => res.json())
    //.then(resData=> {
    //  console.log(resData);
    //});
  //}
  

    //axios({
    //  method: 'post',
    //  url: 'http://127.0.0.1:8000/api/login',
    //  data: {
    //    email: email,
    //    password: password,
    //  }
    // }).then(function (response) {
    //  console.log(response)
    //  return response
    //})

    axios.post('http://127.0.0.1:8000/api/login', {
      "email": email.value,
      "password": password.value,
    })
    .then(function (response) {
      console.log(response)
      console.log(response.data)

      AsyncStorage.setItem("auth", JSON.stringify(response.data))
      //console.log(storeData);
     navigation.replace('Home')
    })
    .catch(function (error) {
      console.log(error)
      setEmail({ value: '', error: '' })
      setPassword({ value: '', error: '' })
      alert("Incorrect Credentials")

    });
  }

    //navigation.reset({
     //index: 0,
      //routes: [{ name: 'Dashboard' }],
    //})
  //}

  return (
 <Background>
      <BackButton goBack={navigation.goBack} />
     
      <Header>Welcome back.</Header>
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <View style={styles.forgotPassword}>
      </View>
      <Button mode="contained" onPress={onLoginPressed}>
        Login
      </Button>
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  }
});