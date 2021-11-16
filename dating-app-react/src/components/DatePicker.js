import * as React from 'react'
import { Button } from 'react-native-paper'
import { DatePickerModal } from 'react-native-paper-dates'

export default function DatePicker(props) {
 
  const onDismissSingle = React.useCallback(() => {
    props.setOpen(false)
  }, [props.setOpen])

  const onConfirmSingle = React.useCallback(
    (params) => {
      props.setOpen(false)
      props.setDate(params.date)
    },
    [props.setOpen, props.setDate]
  )

  return (
    <>
      <Button
        onPress={() => {
          props.setOpen(true)
          console.log(props.open)
        }}
        uppercase={false}
        mode="outlined"
      >
        Date of Birth
      </Button>
      <DatePickerModal
        // locale={'en'} optional, default: automatic
        mode="single"
        visible={props.open}
        onDismiss={onDismissSingle}
        date={props.date}
        onConfirm={onConfirmSingle}
        // validRange={{
        //   startDate: new Date(2021, 1, 2),  // optional
        //   endDate: new Date(), // optional
        // }}
        // onChange={} // same props as onConfirm but triggered without confirmed by user
        // saveLabel="Save" // optional
        // label="Select date" // optional
        // animationType="slide" // optional, default is 'slide' on ios/android and 'none' on web
      />
    </>
  )
}
