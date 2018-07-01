import React from 'react';
import {
  Alert,
  Image,
  Platform,
  ListView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { Icon, Card } from 'react-native-elements'; // Version can be specified in package.json

import { MaterialIcons, FontAwesome, Ionicons, MaterialCommunityIcons, SimpleLineIcons, Feather } from '@expo/vector-icons';

export default class Explore extends React.Component {
  static navigationOptions = {
    header: null,
    tabBarAccessibilityLabel:'Explore',
      tabBarLabel : "Explore",
  tabBarIcon : ({focused}) => (
    <FontAwesome
      focused = {focused}
      name='wpexplorer'
      size={25}
    />
  )
  };


  state = { loading:  true };


async componentWillMount() {
await Expo.Font.loadAsync({
'Ionicons': require("../Fonts/Ionicons.ttf"),
'Entypo': require("../Fonts/Entypo.ttf"),
'Material Design Icons': require('../Fonts/MaterialCommunityIcons.ttf'),
});
this.setState({ loading: false });
}

  render() {
  	  	    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      <View
        style={{
          backgroundColor: '#000',
          height: '100%',
          width: '100%',
          alignItems: 'center',
        }}>
        <Text
          style={{
            marginTop: '5%',
            marginBottom: '7%',
            color: '#fff',
            fontSize: 34,
            fontWeight: 'bold',
          }}>
          Explore
        </Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width:'85%', alignSelf: 'center', }}>
          <IconButton text="Carpool" name="ios-car" type="ionicon"/>
          <IconButton text="Shopping" name="shopping" type="material-community"  />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width:'85%', alignSelf: 'center', }}>
          <IconButton text="Alcohol" name="drink" type="entypo" />
          <IconButton text="Delivery" name="food" type="material-community" />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width:'85%', alignSelf: 'center',  }}>
          <IconButton text="Moving" name="truck-delivery" type="material-community" />
          <IconButton text="Chores" name="human-greeting" type="material-community" />
        </View>


      </View>
    );
  }
}

const IconButton = ({ text, name, type }) => (
  <TouchableOpacity>
    <View
      style={{
        padding: 22,
        paddingTop: 0,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Icon
        reverse
        name={name}
        type={type}
        // reverseColor=''
        raised={true}
        color="#517fa4"
        size={38}
      />
      <Text
        style={{
          marginTop: '10%',
          color: '#fff',
          fontSize: 30,
          fontWeight: 'bold',
        }}>
        {text}
      </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {},
  contentContainer: {
    paddingTop: 30,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },

  titleText: {
    fontSize: 30,
    color: '#000',
    textAlign: 'left',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
