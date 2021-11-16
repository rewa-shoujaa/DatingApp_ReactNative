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
    const [userList, setUserList]=useState([]);
    //let userList=[];
  
   
    const getAuthState = async () => {
      try {
        const authDataString = await AsyncStorage.getItem("auth");
        const authData = JSON.parse(authDataString || {});
        console.log("this is from main")
        console.log(authData);
        console.log(authData.token)
        axios.defaults.headers["Authorization"] = "bearer"+authData.token;
        UsersofInterest()
        // Configure axios headers
        //configureAxiosHeaders(authData.token);
      } catch (err) {
        console.log(err)
      }
    };
    //highlightedUsers()

    function UsersofInterest() {
      let usersarray=[]
      setUserList([])
      axios.get(`http://127.0.0.1:8000/api/interest`)
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

    function favorite(UserID) {
      console.log(UserID);
      axios.get("http://127.0.0.1:8000/api/favorite/"+UserID)
            .then((response)=>{
              console.log(response);   
              UsersofInterest();   
          })
        }

        function Block(UserID) {
            console.log(UserID);
            axios.get("http://127.0.0.1:8000/api/block/"+UserID)
                  .then((response)=>{
                    console.log(response);   
                    UsersofInterest();   
                })
              }
  

  
    useEffect(() => {
      getAuthState();
    }, []);
  
    return (

      <Background>
          <Button
        mode="outlined"
        color="#112240"
        onPress={() => navigation.navigate('Home')}> Go back </Button>
        <HighlightedUsers UsersList={userList} favoritefn={favorite} blockfn={Block} />
        </Background>
   
    
      
    
    );
  }
