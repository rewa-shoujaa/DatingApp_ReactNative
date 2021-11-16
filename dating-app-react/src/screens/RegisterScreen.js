import React, { useState } from 'react'
import axios from 'axios'
import { View, StyleSheet, TouchableOpacity, Settings } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import RadioButton from '../components/RadioButton'
//import DatePicker from '../components/DatePicker1'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'

export default function RegisterScreen({ navigation }){
  const [firstname, setFirstName] = useState({ value: '', error: '' })
  const [lastname, setLastName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  //const [date, setDate] = useState(new Date())
  //const [open, setOpen] = useState(false)
  const [gender, setgender] = useState("0")
  const [intrested, setintrested] = useState("0")

  const onSignUpPressed = () => {
    const nameError = nameValidator(firstname.value)
    const lastnameError = nameValidator(lastname.value)
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError || nameError) {
      setFirstName({ ...firstname, error: nameError })
      setLastName({ ...lastname, error: lastnameError })
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    console.log(firstname.value, lastname.value, email.value, gender, intrested, password.value);

    fetch('http://127.0.0.1:8000/api/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
       'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "first_name": firstname.value,
      "last_name": lastname.value,
      "email": email.value,
      "gender": gender,
      "interested_in": intrested,
      "password": password.value,
        }),
    })
    .then(res => res.json())
    .then(resData=> {
      alert("Successfully registered");
      setFirstName({ value: '', error: '' })
      setLastName({ value: '', error: '' })
      setEmail({ value: '', error: '' })
      setPassword({ value: '', error: '' })
      setgender("0")
      setintrested("0")
    });
  }
    
    /*axios.post('http://127.0.0.1:8000/api/register', {
      "first_name": firstname.value,
      "last_name": lastname.value,
      "email": email.value,
      "gender": gender,
      "interested_in": intrested,
      "password": password.value,
    })
    .then(function (response) {
      console.log(response)
      //return response
    })
    .catch(function (error) {
      console.log(error)
    });
  }*/
    //navigation.reset({
    //  index: 0,
    //  routes: [{ name: 'Dashboard' }],
    //})
  //}

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Header>Create Account</Header>
      <TextInput
        label="First Name"
        returnKeyType="next"
        value={firstname.value}
        onChangeText={(text) => setFirstName({ value: text, error: '' })}
        error={!!firstname.error}
        errorText={firstname.error}
      />
      <TextInput
        label="Last Name"
        returnKeyType="next"
        value={lastname.value}
        onChangeText={(text) => setLastName({ value: text, error: '' })}
        error={!!lastname.error}
        errorText={lastname.error}
      />
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
      <RadioButton
      text ="User Gender "
      value1="0"
       text1="Male" 
       value2="1" 
       text2="Female" 
       setGender={setgender} 
       Gender={gender}
       />

       <RadioButton
       text ="Interested in: "
       value1="0"
       text1="Male" 
       value2="1" 
       text2="Female" 
       setGender={setintrested} 
       Gender={intrested}
       />

      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Sign Up
      </Button>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
