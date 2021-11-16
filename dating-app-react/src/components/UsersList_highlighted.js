import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Settings } from 'react-native'
import User from './UserCard_Highligted'


function UsersList_highlighted(props) {
    return (
        <>
            {props.UsersList.map((user,key)=>{
                return(
                    <ul style={{listStyleType: "none", marginLeft:0, paddingLeft: 0, width:"100%"}}>
                    <User userID={user.id} id={user.id} f_name={user.firstname} l_name={user.lastname}/>
                    </ul>
                )
            })}
            
        </>
    )
}


export default UsersList_highlighted
