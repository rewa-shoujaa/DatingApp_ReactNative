import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios'
//import BottomNavigation from '../components/BottomNavigation'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { View,Text, StyleSheet, TouchableOpacity, Settings } from 'react-native'
import HighlightedUsers from '../components/UsersList_highlighted'
import Background from '../components/Background'
import Button from '../components/Button'

export default function main ({ navigation }){
    const [user, setuser]=useState("");
    const [userList, setUserList]=useState([]);
    //let userList=[];
  
   
  
  
    function highlighted_users() {
      let usersarray=[]
      setUserList([])
      axios.get(`http://127.0.0.1:8000/api/highlighted`)
            .then((response)=>{   
              console.log(response.data);   
            response.data.forEach((user) => {
              usersarray.push({
            id:user.id,
            firstname:user.first_name,
            lastname:user.last_name
          })
         // return userList;
        })
        console.log("this is user list11111111111")
          console.log(usersarray)
          console.log(usersarray.length)

          setUserList(usersarray)
            })
    }

  
  
   
  
    useEffect(() => {
      highlighted_users();
    }, []);
  
  
  return(
  <Background>
    <Button
    style={{
      position: 'absolute',
      right: 0,
      top: 0,}}
      mode="contained"
        color="#112240"
        onPress={() => navigation.navigate('Home')}> Go back </Button>
    <HighlightedUsers UsersList={userList} />
    </Background>

 
  
)
}

