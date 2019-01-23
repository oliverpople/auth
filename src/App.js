import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: false };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyB2zoO7t8FtWxr4CuXPyW_bb9abcibpWWc',
      authDomain: 'authentication-ba61a.firebaseapp.com',
      databaseURL: 'https://authentication-ba61a.firebaseio.com',
      projectId: 'authentication-ba61a',
      storageBucket: 'authentication-ba61a.appspot.com',
      messagingSenderId: '968335474905'
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
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
