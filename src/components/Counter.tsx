import * as React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export interface CounterProps {
  count?: number,
  addCount?: () => void,
  decCount?: () => void,
  resetCount?: () => void
}

const Counter: React.SFC<CounterProps>  = (props: CounterProps) => {
  const { count, addCount, decCount, resetCount } = props

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>{count}</Text>
      <View style={styles.buttons}>
        <Button
          title="increment"
          onPress={() => addCount && addCount()}
        />
        <Button
          title="decrement"
          onPress={() => decCount && decCount()}
        />
        <Button
          title="reset"
          onPress={() => resetCount && resetCount()}
        />
      </View>
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