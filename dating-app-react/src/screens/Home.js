import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

export default function Home({ navigation }) {
  return (
    <Background>
       <Button
        mode="contained"
        onPress={() => navigation.navigate('Card')}
      >
        Highlighted Users
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('UserofInterest')}
      >
        Find a Match
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('Followers')}
      >
        Followers
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('followedByme')}
      >
        Followed by me
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('profile')}
      >
        Profile
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('notifications')}
      >
        Notifications
      </Button>
    </Background>
  )
}
