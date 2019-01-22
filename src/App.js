import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyB2zoO7t8FtWxr4CuXPyW_bb9abcibpWWc',
      authDomain: 'authentication-ba61a.firebaseapp.com',
      databaseURL: 'https://authentication-ba61a.firebaseio.com',
      projectId: 'authentication-ba61a',
      storageBucket: 'authentication-ba61a.appspot.com',
      messagingSenderId: '968335474905'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
