import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph , SearchBar} from 'react-native-paper';
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
//import Button from './Button'
import theme from '../Core/theme'


function UserCard (props){
  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
  return(
    <li style={{ marginLeft:0 }}>
  <Card  style={{ backgroundColor: " WhiteSmoke"}}>
    
    <Card.Content>
      <Title>{props.f_name+" "+props.l_name}</Title>
    </Card.Content>
    <Card.Cover style={{ aspectRatio: 1/1 }} source={{ uri: 'https://picsum.photos/700' }} />
  
   
  </Card>
  </li>
  
)
}

export default UserCard;