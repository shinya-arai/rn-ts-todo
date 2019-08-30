import * as React from 'react'
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native'
import { Post } from '../reducers/postsReducer';

export interface Props {
  posts: null | Post[]
}

const TodoList = (props: Props) => {
  const { posts } = props
  return (
    <View style={styles.container}>
      <ScrollView>
        <FlatList
          data={posts}
          renderItem={({item}) => {
            return (
              <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>
              <Text>{item.text}</Text>
              <Text>{item.name}</Text>
            </View>
            )
          }}
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 6
  },
})

export default TodoList