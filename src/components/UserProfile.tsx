import * as React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const UserProfile  = () => {
  return (
   <View style={styles.container}>
     <Text>UserProfile</Text>
   </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  }
})

export default UserProfile