import React, { Component } from 'react';
import {
  Alert,
  Button,
  TextInput,
  ImageBackground,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { Location, Permissions } from 'expo';
import AwesomeButtonRick from 'react-native-really-awesome-button';
import { MaterialIcons } from '@expo/vector-icons';


import Amplify, { API } from 'aws-amplify';
import aws_exports from '../aws-exports';
Amplify.configure(aws_exports);



export default class LaunchScreen extends Component {
  constructor(props) {
    super(props);

    this.state = { locationResult: null, apiResponse: null, noteId: '111' };
    this.handleFindPress = this.handleFindPress.bind(this);
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


    async getRating() {

      let options = {
"queryStringParameters": { "category": "Mexican" }
}

      const path = "/RatedItems";
      try {
        const apiResponse = await API.get("RatedItemsCRUD", path);
        console.log(apiResponse);
        this.setState({apiResponse});
      } catch (e) {
        console.log(e);
      }
    }


  // Create a new Note according to the columns we defined earlier
  async saveRating() {
    console.log('save rating called')
    let newRating = {
      body: {

        "category": "Italian",
        "details": "THIS WAS ONE OF THE BEST THINGS I EVER HAD",
        "itemId": "this is it",
        "name": "Mucho Burrito",
        "ratingCount": 1,
        "ratingValue": 2,
        "final": "finalll",
      }
    }
    const path = "/RatedItems";

    // Use the API module to save the note to the database
    console.log('reached try block')
    try {
      console.log('try start')
      const apiResponse = await API.put("RatedItemsCRUD", path, newRating)
      console.log('apiResponse called')
      console.log(apiResponse);
      this.setState({apiResponse});
    } catch (e) {
      console.log(e);
    }
  }



  handleFindPress() {
    console.log('Find me button pressed');
    this.saveRating();
    Alert.alert(this.state.locationResult);
    this.props.navigation.navigate('Main', {location:this.state.locationResult});
  }
  
  handleClosePress() {
    console.log('close button pressed');
    Alert.alert(this.state.locationResult);
    this.getRating();
    // this.props.navigation.navigate('Main', {location:this.state.locationResult});
  }

  render() {
    return (
      <ImageBackground
        source={{
          uri:
            'https://images.pexels.com/photos/89432/pexels-photo-89432.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb',
        }}
        style={styles.backgroundImage}>
        <View style={styles.overlay} />

        <View style={styles.close}>
          <MaterialIcons
          name="close" 
          color="white" 
          size={35} 
          onPress={()=> this.handleClosePress()} />
        </View>

        <Text style={styles.heading}>Hungry?</Text>
        <Text style={styles.paragraph}>Let's find something to eat</Text>
        <TextInput
          placeholder="Enter your address"
          returnKeyType="go"
          underlineColorAndroid='#e8e1e1'
          style={styles.textInput}
        />
        <Text style={styles.paragraph}>or</Text>
        <View style={styles.button}>
          <AwesomeButtonRick
            backgroundShadow="#074a7a"
            backgroundColor="#1073ba"
            backgroundActive="#074a7a"
            type="primary"
            onPress={() => this.saveRating()}>
            Find Me!
          </AwesomeButtonRick>
        </View>
      </ImageBackground>
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
    width: 35,
    height: 35,
    alignItems:'center',
    justifyContent:'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: '#000',
    opacity: 0.6,
  },
  heading: {
    fontSize: 44,
    margin: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '30%',
    color: '#e8e1e1',
  },
  paragraph: {
    fontSize: 24,
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
    textAlign: 'center',
  },
});
