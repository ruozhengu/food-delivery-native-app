import React, { Component } from 'react';
import { Alert, Button, TextInput, ImageBackground, Text, View, StatusBar, StyleSheet } from 'react-native';
import { Constants, Location, Permissions } from 'expo';
import AwesomeButtonRick from 'react-native-really-awesome-button';
import { Icon } from 'react-native-elements'

// or any pure javascript modules available in npm
// import { Card } from 'react-native-elements'; // Version can be specified in package.json

export default class LaunchScreen extends Component {

  constructor(props) {
    super(props);
  
    this.state = { locationResult: null };
   this.handlePress = this.handlePress.bind(this);
  }


      componentDidMount() {
    this._getLocationAsync();
  }

  _getLocationAsync = async () => {
   let { status } = await Permissions.askAsync(Permissions.LOCATION);
   if (status !== 'granted') {
     this.setState({
       locationResult: 'Permission to access location was denied',
     });
   }

   let location = await Location.getCurrentPositionAsync({});
   this.setState({ locationResult: JSON.stringify(location) });
 };

 handlePress() {console.log('button pressed'); Alert.alert(this.state.locationResult);}
  


  render() {
  //  Alert.alert(
  // 'Alert Title',
  // 'My Alert Msg',
  // [
  //   {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
  //   {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
  //   {text: 'OK', onPress: () => console.log('OK Pressed')},
  // ],
  // { cancelable: false }
  // )



    return (
  <ImageBackground 
          source={{uri: 'https://images.pexels.com/photos/89432/pexels-photo-89432.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb'}}
          style={styles.backgroundImage}
        >

      <View style={styles.overlay}/>
      <View style={styles.close}><Icon name='close' /></View>
      <Text style={styles.heading}>Hungry?</Text>
      <Text style={styles.paragraph}>Let's find something to eat</Text>
      <TextInput placeholder="Enter your address!"
        style={styles.textInput}
      />
      <Text style={styles.paragraph}>or</Text>
      <View style={styles.button} >
    <AwesomeButtonRick 
     backgroundShadow='#074a7a' 
     backgroundColor='#1073ba' 
     backgroundActive='#074a7a' 
     type="primary"
     onPress= {() => this.handlePress()}>
     Find Me!</AwesomeButtonRick>
      </View>
      
 </ImageBackground >
    );
  }
}



const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000',
  },
  close: {
    position: 'absolute',
    top: 46,
    right: 40,
    width: 25,
    height: 25,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: '#000',
    opacity: 0.6
  },  
  heading: {
    fontSize:44,
    margin: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '30%',
    //marginRight: '45%',
    color: '#e8e1e1',
  },
  paragraph: {
    fontSize:24,
    margin: 24,
    fontWeight: '400',
    textAlign: 'center',
    color: '#e8e1e1',
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'center',
  },
  textInput: {
    height: 60, 
    borderColor: '#000', 
    backgroundColor: '#e8e1e1', 
    borderWidth: 3,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
