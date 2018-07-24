import React, { Component } from 'react';
import { Text, ScrollView, View, Alert, StyleSheet, Picker, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { TextInput, Button, } from 'react-native';
// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // Version can be specified in package.json
import { MaterialIcons, FontAwesome, Ionicons, MaterialCommunityIcons, SimpleLineIcons, Feather } from '@expo/vector-icons';



import { createBottomTabNavigator } from 'react-navigation'

// import SignIn from './Signin'
import Amplify, { Auth, API } from 'aws-amplify'
import AWSConfig from '../aws-exports'
Amplify.configure(AWSConfig)


export class SignIn extends React.Component {


      static navigationOptions = {
    header: null,
      tabBarLabel : "Sign In",
  tabBarIcon : ({focused}) => (
    <Feather 
      name="user-check"
      size={25}
    />
  )
  };



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
  

      async getDriver() {
      console.log('getDriver started')
      const path = "/DriverTable/object/" + this.state.username;

      try {
        console.log('try started')
        const apiResponse = await API.get("DriverTableCRUD", path);
        console.log('After api response')
        console.log(apiResponse);
        this.setState({apiResponse});
      } catch (e) {
        console.log(e);
      }
    }


  signIn() {
        if(this.state.password === "") {
      Alert.alert('password cannot be empty')
    } else {
    const { username, password } = this.state
    Auth.signIn(username, password)
    .then(user => {
      this.setState({ user })
      console.log(user)
      this.getDriver()
      this.props.navigation.navigate('DriverProfile')
      // Alert.alert('Your Information is correct. Please enter the confirmation code you will receive via text')
    })
    .catch(err => {Alert.alert(JSON.stringify(err));console.log('error signing in!: ', err);})
    // this.props.navigation.navigate('CustomerProfile')
  }
}

  confirmSignIn() {
    Auth.confirmSignIn(this.state.user, this.state.confirmationCode)
    .then(data => {
      console.log(data)
      this.props.screenProps.authenticate(true)
    })
    .catch(err => {Alert.alert(JSON.stringify(err));console.log('error confirming signing in!: ', err)})
  }

  forgotPassword() {
    
    Auth.forgotPassword(this.state.username)
    .then(data => {Alert.alert('Please enter your new password and the confirmation code below');console.log(data)})
    .catch(err => {Alert.alert(JSON.stringify(err));console.log(err)});

  }

  submitNewPassword() {
    Auth.forgotPasswordSubmit(this.state.username, this.state.confirmationCode, this.state.password)
    .then(data => {Alert.alert('Your password has been changed successfully');console.log('password change succesfull')})
    .catch(err => {Alert.alert(JSON.stringify(err));console.log(err)});
}


  render() {
    return (
      <View style={styles.container}>
      <Text style={{fontSize:25, fontWeight:'bold',alignSelf:'center'}}>Driver Sign In Form</Text>
        <TextInput
          onChangeText={value => this.onChangeText('username', value)}
          style={styles.input}
          placeholder='username'
          underlineColorAndroid='#fff'
        />
        <TextInput
          onChangeText={value => this.onChangeText('password', value)}
          style={styles.input}
          secureTextEntry={true}
          placeholder='password'
          underlineColorAndroid='#fff'
        />
        <Button title="Sign In" onPress={this.signIn.bind(this)} />
        <TextInput
          onChangeText={value => this.onChangeText('confirmationCode', value)}
          style={styles.input}
          placeholder='confirmation Code'
          underlineColorAndroid='#fff'
        />
        <View style={{justifyContent:'center', flexDirection:'row'}}>
        <Button title="Forgot Password" onPress={this.forgotPassword.bind(this)} />
        <Button title="Submit Password" onPress={this.submitNewPassword.bind(this)} />
        </View>
      </View>
    );
  }
}



class SignUp extends React.Component {


    static navigationOptions = {
    header: null,
      tabBarLabel : "Sign Up",
  tabBarIcon : ({focused}) => (
    <Feather 
      name="user-plus"
      size={25}
    />
  )
  };


  state = {
    username: '',
    password: '',
    phoneNumber: '',
    email: '',
    confirmationCode: '',
    licenseNumber: '',
    plateNumber: '',
    name: '',
    sex: 'Male',

  }
  onChangeText(key, value) {
    this.setState({
      [key]: value
    })
  }


   async saveDriver() {
    console.log('save Driver called')
    let newDriver = {
      body: {
        "driverId":this.state.username,
        "curr_holding_count":0,
        "dly_completed_count":0,
        "dly_earning":0,
        "driving_license_id": this.state.licenseNumber,
        "email": this.state.email,
        "location":{},
        "mtl_completed_count":0,
        "mtl_earning":0,
        "onduty":false,
        "phone": this.state.phoneNumber,
        "plate": this.state.plateNumber,
        "sex":this.state.sex,
        "taker_name": this.state.name,
        "working_hour": 0,
      }
    }
    const path = "/DriverTable";

    // Use the API module to save the note to the database
    console.log('reached try block')
    try {
      console.log('try start')
      const apiResponse = await API.put("DriverTableCRUD", path, newDriver)
      console.log('apiResponse called')
      console.log(apiResponse);
      this.setState({apiResponse});
    } catch (e) {
      console.log(e);
    }
  }



  signUp() {
    if(this.state.phoneNumber === "") {
      Alert.alert('phone number is required')
    } else {
    Auth.signUp({
      username: this.state.username,
      password: this.state.password,
      attributes: {
        email: this.state.email,
        phone_number: this.state.phoneNumber
      }
    })
    .then(data => {Alert.alert("You will receive a confirmation code shortly! Please enter below");console.log(data)})
    .catch(err => {Alert.alert(JSON.stringify(err));console.log('error signing up!: ', err)})
  }
}


  confirmSignUp() {
    Auth.confirmSignUp(this.state.username, this.state.confirmationCode)
    .then(data => {
      this.saveDriver();
      Alert.alert('You have successfully signed up. Please go to Sign in screen');
      console.log(data)})
    .catch(err => {Alert.alert(JSON.stringify(err));console.log('error confirming signing up!: ', err)})
  }

  render() {
    return (

      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <ScrollView>
      <Text style={{fontSize:25, fontWeight:'bold',alignSelf:'center'}}>Driver Sign Up Form</Text>
        <TextInput
          onChangeText={value => this.onChangeText('name', value)}
          style={styles.input}
          placeholder='Name'
          underlineColorAndroid='#fff'
        />
        <TextInput
          onChangeText={value => this.onChangeText('plateNumber', value)}
          style={styles.input}
          placeholder='Plate Number'
          underlineColorAndroid='#fff'
        />
        <TextInput
          onChangeText={value => this.onChangeText('licenseNumber', value)}
          style={styles.input}
          placeholder='License Number'
          underlineColorAndroid='#fff'
        />
        <TextInput
          onChangeText={value => this.onChangeText('username', value)}
          style={styles.input}
          placeholder='username'
          underlineColorAndroid='#fff'
        />
        <TextInput
          onChangeText={value => this.onChangeText('password', value)}
          style={styles.input}
          secureTextEntry={true}
          placeholder='password'
          underlineColorAndroid='#fff'
        />
        <TextInput
          onChangeText={value => this.onChangeText('phoneNumber', value)}
          style={styles.input}
          placeholder='phone'
          defaultValue = '+1'
          keyboardType={'numeric'}
          underlineColorAndroid='#fff'
        />
        <TextInput
          onChangeText={value => this.onChangeText('email', value)}
          style={styles.input}
          placeholder='email'
          keyboardType={'email-address'}
          underlineColorAndroid='#fff'
        />

          <Picker
            style={{ width: 400, height: 80, justifyContent: 'center', overflow: 'hidden' }}
            selectedValue={this.state.sex}
            onValueChange={(itemValue, itemIndex) => this.setState({ sex: itemValue })}>
            <Picker.Item label="Male" value="Male" />
            <Picker.Item label="Female" value="Female" />
            <Picker.Item label="Other" value="Other" />
          </Picker>

        <Button title="Sign Up" 
        onPress={this.signUp.bind(this)} />
        <TextInput
          onChangeText={value => this.onChangeText('confirmationCode', value)}
          style={styles.input}
          placeholder='confirmation Code'
          underlineColorAndroid='#fff'
        />
        <Button title="Confirm Sign Up" onPress={this.confirmSignUp.bind(this)} />

      </ScrollView>
      </KeyboardAvoidingView>
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
    margin: 10,
    marginTop: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingVertical: 30
  },
});
