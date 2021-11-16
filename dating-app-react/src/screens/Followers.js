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
      axios.get(`http://127.0.0.1:8000/api/followers`)
      .then((response)=>{ 
        console.log(response);  
       // console.log(response.data[0][0].last_name);   
        for(let i=0;i<response.data.length;i++){
          usersarray.push({
            id:response.data[i][0].id,
            firstname:response.data[i][0].first_name,
            lastname:response.data[i][0].last_name
          })
        }
   console.log("this is user list1111111")
    console.log(usersarray)
    setUserList(usersarray)
  })
  console.log("this is user list111111111112222")
    console.log(usersarray)
    console.log(usersarray.length)

    //setUserList(usersarray)
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
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
      }}
        mode="contained"
        color="#112240"
        onPress={() => navigation.navigate('Home')}> Go back </Button>
        <HighlightedUsers UsersList={userList} favoritefn={favorite} blockfn={Block} />
        </Background>
   
    
      
    
    );
  }
