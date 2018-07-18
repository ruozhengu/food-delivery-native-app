import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput, Button, } from 'react-native';
// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // Version can be specified in package.json



import { createBottomTabNavigator } from 'react-navigation'

// import SignIn from './Signin'



export class SignIn extends React.Component {
  state = {
    username: '',
    password: '',
    confirmationCode: '',
    user: {}
  }
  onChangeText(key, value) {
    this.setState({
      [key]: value
    })
  }
  
  signIn() {
    // const { username, password } = this.state
    // Auth.signIn(username, password)
    // .then(user => {
    //   this.setState({ user })
    //   console.log('successful sign in!')
    // })
    // .catch(err => console.log('error signing in!: ', err))
    this.props.navigation.navigate('RestaurantProfile')
  }

  confirmSignIn() {
    Auth.confirmSignIn(this.state.user, this.state.confirmationCode)
    .then(() => {
      console.log('successful confirm sign in!')
      this.props.screenProps.authenticate(true)
    })
    .catch(err => console.log('error confirming signing in!: ', err))
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={value => this.onChangeText('username', value)}
          style={styles.input}
          placeholder='username'
        />
        <TextInput
          onChangeText={value => this.onChangeText('password', value)}
          style={styles.input}
          secureTextEntry={true}
          placeholder='password'
        />
        <Button title="Sign In" onPress={this.signIn.bind(this)} />
        <TextInput
          onChangeText={value => this.onChangeText('confirmationCode', value)}
          style={styles.input}
          placeholder='confirmation Code'
        />
        <Button title="Confirm Sign In" onPress={this.confirmSignIn.bind(this)} />
      </View>
    );
  }
}



class SignUp extends React.Component {
  state = {
    username: '',
    password: '',
    phone_number: '',
    email: '',
    confirmationCode: ''
  }
  onChangeText(key, value) {
    this.setState({
      [key]: value
    })
  }
  signUp() {
    Auth.signUp({
      username: this.state.username,
      password: this.state.password,
      attributes: {
        email: this.state.email,
        phone_number: this.state.phone_number
      }
    })
    .then(() => console.log('successful sign up!'))
    .catch(err => console.log('error signing up!: ', err))
  }
  confirmSignUp() {
    Auth.confirmSignUp(this.state.username, this.state.confirmationCode)
    .then(() => console.log('successful confirm sign up!'))
    .catch(err => console.log('error confirming signing up!: ', err))
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={value => this.onChangeText('username', value)}
          style={styles.input}
          placeholder='username'
        />
        <TextInput
          onChangeText={value => this.onChangeText('password', value)}
          style={styles.input}
          secureTextEntry={true}
          placeholder='password'
        />
        <TextInput
          onChangeText={value => this.onChangeText('phone_number', value)}
          style={styles.input}
          placeholder='phone'
        />
        <TextInput
          onChangeText={value => this.onChangeText('email', value)}
          style={styles.input}
          placeholder='email'
        />
        <Button title="Sign Up" onPress={this.signUp.bind(this)} />
        <TextInput
          onChangeText={value => this.onChangeText('confirmationCode', value)}
          style={styles.input}
          placeholder='confirmation Code'
        />
        <Button title="Confirm Sign Up" onPress={this.confirmSignUp.bind(this)} />
      </View>
    );
  }
}



const config = {
  SignIn: { screen: SignIn },
  SignUp: { screen: SignUp }
}

export default createBottomTabNavigator(config)




const styles = StyleSheet.create({
  input: {
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: '#2196F3',
    margin: 10
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
