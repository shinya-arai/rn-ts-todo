import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const TodoList = () => {
  return (
    <View style={styles.container}>
      <Text>TodoList</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
  },
})

export default TodoList