import * as React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { User } from '../reducers/usersReducer'

export interface Props {
  users: User[],
  currentUser: null | User
  changeCurrentUser?: (userId: number) => void
}

class UserProfile extends React.Component<Props, {}> {

  displayUsers = () => {
    const { users, changeCurrentUser } = this.props

    return users.map(user => {
      return (
        <View key={user.id}>
          <Text 
            style={{ marginRight: 20 }}
            onPress={() => changeCurrentUser && changeCurrentUser(user.id)}
          >
            {user.name}
          </Text>
        </View>
      )
    })
  }

  render() {
    const { currentUser } = this.props

    return (
      <View style={styles.container}>
        <View style={{ flex: 0.1, flexDirection: 'row', justifyContent: 'center' }}>
          {this.displayUsers()}
        </View>
        <View style={{ flex: 0.1, flexDirection: 'row' }}>
          <Text>名前: {currentUser ? currentUser.name : 'null'}</Text>
          {/* <Text style={{ marginLeft: 10 }}>投稿数: {currentUser ? currentUser.count : 'null'}</Text> */}
        </View>
      </View>
     )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'space-around',
    alignItems: 'center',
  }
})

export default UserProfile