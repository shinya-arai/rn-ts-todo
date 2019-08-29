import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const TodoForm = () => {
  return (
    <View style={styles.container}>
      <Text>TodoForm</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    padding: 15
  }
})

export default TodoForm