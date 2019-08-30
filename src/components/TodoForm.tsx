import * as React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import store from '../store';

interface Props {
  addPost: (text: string) => void
}

interface State {
  text: string
}

class TodoForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = { text: '' }
  }

  render() {
    const { text } = this.state
    const { addPost } = this.props

    return (
      <View style={styles.container}>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={text => this.setState({ text })}
          value={text}
        />
        <Button
          title="投稿する"
          onPress={() => {
            addPost(text)
            console.log(store.getState())
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    padding: 15
  }
})

export default TodoForm