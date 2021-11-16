import * as React from 'react'
import { View, StyleSheet} from 'react-native'
import { RadioButton, Text } from 'react-native-paper'
import { theme } from '../core/theme'

const MyComponent = ({ errorText, description, ...props }) => {
 

  return (
    <RadioButton.Group onValueChange={newValue => props.setGender(newValue)} value={props.Gender}>
      <View style={styles.container}>

        
          <Text style={styles.text}>{props.text}</Text>
       
        
        <View style={styles.radiogroup}>

          <View style={styles.radiobtn} >
            <Text>{props.text1}</Text>
            <RadioButton value={props.value1} />
          </View>

          <View style={styles.radiobtn}>
            <Text>{props.text2}</Text>
            <RadioButton value={props.value2} />
          </View>

        </View>

        {description && !errorText ? (
          <Text style={styles.description}>{description}</Text>
        ) : null}
        {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
      </View>
    </RadioButton.Group>
  )
}

export default MyComponent

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
    flexDirection: "column"
  },
  input: {
    backgroundColor: theme.colors.surface,
  },
  description: {
    fontSize: 13,
    color: theme.colors.secondary,
    paddingTop: 8,
  },
  text: {
    fontSize: 15,
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
  error: {
    fontSize: 13,
    color: theme.colors.error,
    paddingTop: 8,
  },
  radiogroup: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 5,
    alignItems: 'center',

  },

  radiobtn: {
    flex:0.5,
    flexDirection: 'column',
    justifyContent: 'center',
    

  },
})
