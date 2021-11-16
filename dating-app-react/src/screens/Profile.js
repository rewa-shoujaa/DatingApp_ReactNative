import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios'
//import BottomNavigation from '../components/BottomNavigation'
import AsyncStorage from '@react-native-async-storage/async-storage'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import Button from '../components/Button'

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default function Profile({ navigation }) {
  const [userDetails, setuserDetails] = useState([])



  const [firstname, setFirstName] = useState("")
  const [lastname, setLastName] = useState("")
  const [currency, setcurrency] = useState("")
  const [gender, setgender] = useState("")
  const [height, setheight] = useState("")
  const [weight, setweight] = useState("")
  const [bio, setbio] = useState("")
  const [net, setnet] = useState("")
  const [interest, setinterest] = useState("")
  const [nationality, setnationality] = useState("")
  const [profilepic, setprofilepic] = useState([])
  


  const getAuthState = async () => {
    try {
      const authDataString = await AsyncStorage.getItem("auth");
      const authData = JSON.parse(authDataString || {});
      console.log("this is from main")
      console.log(authData);
      console.log(authData.token)
      axios.defaults.headers["Authorization"] = "bearer"+authData.token;
      GetUserDetails()
     // GetProfilePicture()
      // Configure axios headers
      //configureAxiosHeaders(authData.token);
    } catch (err) {
      console.log(err)
    }
  };
  

  function GetUserDetails() {
    let usersarray=[]
    setuserDetails([])
    axios.get(`http://127.0.0.1:8000/api/getDetails`)
          .then((response)=>{   
            console.log(response.data[0]);   
            //response.data[0].forEach((user) => {
            usersarray.push({
          id:response.data[0].id,
          firstname:response.data[0].first_name,
          lastname:response.data[0].last_name,
          currency:response.data[0].currency,
          gender:response.data[0].gender,
          height:response.data[0].height,
          weight:response.data[0].weight,
          bio:response.data[0].bio,
          nationality:response.data[0].nationality,
          net: response.data[0].net_worth,
          interest: response.data[0].interested_in
        
       // return userList;
      })
      


        setFirstName(usersarray[0].firstname)
        setLastName(usersarray[0].lastname)
        setcurrency(usersarray[0].currency)
        setgender(usersarray[0].gender)
        setheight(usersarray[0].height)
        setweight(usersarray[0].weight)
        setbio(usersarray[0].bio)
        setnet(usersarray[0].net)
        setinterest(usersarray[0].interest)
        setnationality(usersarray[0].nationality)
        console.log(usersarray)

        setuserDetails(usersarray)
          })
  }

  function GetProfilePicture() {
    let usersarray=[]
    setprofilepic([])
    axios.get(`http://127.0.0.1:8000/api/profilePic`)
          .then((response)=>{   
            console.log(response.data[0]);   
            //response.data[0].forEach((image) => {
            usersarray.push({
          imgid:response.data[0].id,
          imgurl:response.data[0].picture_url})
        
       // return userList;
      
        console.log(usersarray)
        console.log(usersarray.length)

        setprofilepic(usersarray.imgurl)
          })
        }


          const onEditDetails = () => {
            axios.post('http://127.0.0.1:8000/api/editInfo', {
              "height": height,
              "weight": weight,
              "nationality": nationality,
              "net_worth": net,
              "currency": currency,
              "bio": bio,

                })
                .then(function (response) {
                  alert("thank you for updating your information");
                  GetUserDetails()
                 })
                 .catch(function (error) {
                  alert("Unsuccessful attempt please try again later")
            
                });
              }
        
            /*fetch('http://127.0.0.1:8000/api/editInfo', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
               'Content-Type': 'application/json'
              },
              body: JSON.stringify({
              "height": height,
              "weight": weight,
              "nationality": nationality,
              "net_worth": net,
              "currency": currency,
              "bio": bio,

                }),
            })
            .then(res => res.json())
            .then(resData=> {
              alert("thank you for updating your information");
              GetUserDetails()

            });
          }*/


  useEffect(() => {
    getAuthState();
  }, []);

 
    return (
      <>
       <Button
       style={{marginVertical:0}}
        mode="contained"
        color="#112240"
        onPress={() => navigation.navigate('Home')}> Go back </Button>
      <View style={styles.container}>
         
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{firstname+" "+lastname}</Text>
              <Text style={styles.info}>{gender==0?"Male":"Female"}</Text>
              <Text style={styles.description}>Interested in {interest==0?" Males":" Females"}</Text>
              
    <TextInput
        label="Height"
        value={height}
        onChangeText={(text) => setheight(text)}
        returnKeyType="next"
      />
      <TextInput
        label="Weight"
        value={weight}
        onChangeText={(text) => setweight(text)}
        returnKeyType="next"
      />
      <TextInput
        label="Nationality"
        value={nationality}
        onChangeText={(text) => setnationality(text)}
        returnKeyType="next"
      />
      <TextInput
        label="Net Worth"
        value={net}
        onChangeText={(text) => setnet(text)}
        returnKeyType="next"
      />
      <TextInput
        label="currency"
        value={currency}
        onChangeText={(text) => setcurrency(text)}
        returnKeyType="next"
      />
      <TextInput
        label="About me"
        value={bio}
        onChangeText={(text) => setbio(text)}
        returnKeyType="done"
      />

    <Button mode="contained" onPress={onEditDetails}>
        Upload Info
      </Button>

            </View>
        </View>
      </View>
      </>
    );
  }


const styles = StyleSheet.create({
  header:{
    backgroundColor: "#112240",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "#9a12b3",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"White",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#9a12b3",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
});
