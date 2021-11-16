import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios'
//import BottomNavigation from '../components/BottomNavigation'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { View,Text, StyleSheet, TouchableOpacity, Settings } from 'react-native'
import HighlightedUsers from '../components/UsersList'
import Background from '../components/Background'
import Button from '../components/Button'


export default function UsersInterest ({ navigation }){
    const [user, setuser]=useState("");
    const [notifications, setnotifications]=useState([]);
    //let userList=[];
  
   
    const getAuthState = async () => {
      try {
        const authDataString = await AsyncStorage.getItem("auth");
        const authData = JSON.parse(authDataString || {});
        console.log("this is from main")
        console.log(authData);
        console.log(authData.token)
        axios.defaults.headers["Authorization"] = "bearer"+authData.token;
        getNotifications()
        // Configure axios headers
        //configureAxiosHeaders(authData.token);
      } catch (err) {
        console.log(err)
      }
    };
    //highlightedUsers()

    function getNotifications() {
      let usersarray=[]
      setnotifications([])
      axios.get(`http://127.0.0.1:8000/api/getnotifications`)
            .then((response)=>{   
              console.log(response.data);   
            response.data.forEach((noti) => {
              usersarray.push({
            id:noti.id,
            body:noti.body,
            time :noti.created_at
            
          })
         // return userList;
        })
        console.log("this is user list11111111111")
          console.log(usersarray)
          console.log(usersarray.length)

          setnotifications(usersarray)
            })
    }

    
    useEffect(() => {
      getAuthState();
    }, []);
  
    return (

      <Background>
          <Button
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            marginBottom:20
      }}
      mode="contained"
        color="#112240"
        onPress={() => navigation.navigate('Home')}> Go back </Button>
        
        {notifications.map((notification,key)=>{
                return(
                    <ul style={{listStyleType: "none", marginLeft:0, paddingLeft: 0, width:"100%"}}>
                    <li styling={{backgroundColor: "#112240",borderWidth: 5,borderRadius:7, color:'white'}}>
                      <h3 styling={{backgroundColor: "#112240",borderWidth: 5,borderRadius:7, color:'white'}}>{notification.body}</h3>
                      <Text>{notification.time}</Text>
                    </li>
                    </ul>
                )
            })}


        </Background>
   
    
      
    
    );
  }
