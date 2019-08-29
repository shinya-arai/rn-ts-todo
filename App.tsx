/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Component } from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native';

import { Provider } from 'react-redux'
import store from './src/store'

import UserProfileContainer from './src/containers/UserProfileContainer'
import TodoForm from './src/components/TodoForm';
import TodoList from './src/components/TodoList';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 10 }}>
          <UserProfileContainer />
          <TodoForm />
          <TodoList />
        </View>
      </Provider>
    );
  }
}