import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Settings } from 'react-native'
import User from './UserCard_Block'


function UsersList(props) {
    return (
        <>
            {props.UsersList.map((user,key)=>{
                return(
                    <ul style={{listStyleType: "none", marginLeft:0, paddingLeft: 0}}>
                    <User userID={user.id} id={user.id} f_name={user.firstname} l_name={user.lastname} favoritefn={props.favoritefn} blockfn={props.blockfn} />
                    </ul>
                )
            })}
            
        </>
    )
}
export default UsersList
