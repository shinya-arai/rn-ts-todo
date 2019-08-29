import * as React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const Counter = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.countText}>0</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  countText: {
    flex: 0.2,
    fontSize: 90,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'bottom',
    color: 'black',
  },
  buttons: {
    flex: 0.2,
    flexDirection: 'row',
  },
});

export default Counter