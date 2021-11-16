import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph , SearchBar} from 'react-native-paper';
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
//import Button from './Button'
import theme from '../Core/theme'


function UserCard (props){
  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
  return(
    <li style={{ marginLeft:0, width:"100%" }}>
  <Card  style={{ backgroundColor: " WhiteSmoke", width:"100%"}}>
    
    <Card.Content>
	<Title>{props.f_name+ " "+props.l_name}</Title>
    </Card.Content>
    <Card.Cover style={{ aspectRatio: 1/1 }} source={{ uri:'../assets/user.jpg'}} />
    <Card.Actions>
      <Button onPress={()=>props.blockfn(props.userID)}>Block</Button>
      <Button onPress={()=>props.favoritefn(props.userID)}>Favorite</Button>
    </Card.Actions>
   
  </Card>
  </li>
  
)
}

export default UserCard;