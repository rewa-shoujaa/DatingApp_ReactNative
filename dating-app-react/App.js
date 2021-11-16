import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
  profile,
  Card,
  Home,
  users,
  UserofInterest,
  Connections,
  followedByme,
  Followers,
  notifications
} from './src/screens'

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          
          <Stack.Screen name="profile" component={profile} />
          <Stack.Screen name="Card" component={Card} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="users" component={users} />
          <Stack.Screen name="UserofInterest" component={UserofInterest} />
          <Stack.Screen name="Followers" component={Followers} />
          <Stack.Screen name="followedByme" component={followedByme} />
          <Stack.Screen name="Connections" component={Connections} />
          <Stack.Screen name="notifications" component={notifications} />

          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
