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
  Dimensions,
} from 'react-native';

import { Icon, Card } from 'react-native-elements'; // Version can be specified in package.json

import { MaterialIcons, FontAwesome, Ionicons, MaterialCommunityIcons, SimpleLineIcons, Feather } from '@expo/vector-icons';
import { StatusBar } from 'react-native'

import {Constants} from 'expo'
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
    StatusBar.setBarStyle('light-content', true);
  	  	    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      <View
        style={{
          backgroundColor: '#191717',
          height: '100%',
          width: '100%',
          paddingTop: 20,
          alignItems: 'center',
        }}>
                <Image
  style={{
    alignSelf: 'center',
    height: '18%',
    width: '95%',
    borderWidth: 1,
    // borderRadius: 75
  }}
  source={{uri:'https://i.pinimg.com/originals/2c/20/cf/2c20cf538b25a09a571be1a94277bddd.jpg'}}
  resizeMode="stretch"
/>


               

        

        <View style={{paddingTop:15, flexDirection: 'row', justifyContent: 'space-between', width:'85%', alignSelf: 'center', }}>
          <IconButton text="Carpool" name="ios-car" type="ionicon"/>
          <IconButton text="Shopping" name="shopping" type="material-community"  />
          <IconButton text="Alcohol" name="drink" type="entypo" />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width:'85%', alignSelf: 'center', }}>
          
          <IconButton text="Delivery" name="food" type="material-community" />
          <IconButton text="Moving" name="truck-delivery" type="material-community" />
          <IconButton text="Chores" name="human-greeting" type="material-community" />
        </View>

<Card
                // dividerStyle={{ backgroundColor: 'pink' }}
                containerStyle={{
                  backgroundColor: '#191717',
                  // height: '15%',
                  width: '90%',
                  marginTop: 0,
                  borderWidth: 0
                }}
                image={{ uri: 'https://img.aws.livestrongcdn.com/ls-article-image-673/ds-photo/getty/article/83/159/496069654.jpg' }}
                imageStyle={{ backgroundColor: '#191717', height: 100,}}
                featuredTitle={'Special Offer 1'}
                featuredTitleStyle={{ fontSize: 22, fontWeight: 'bold' }}
              />
        <View style={{ flexDirection: 'row',  width:'100%', alignItems: 'center', justifyContent: 'center' }}>
          
         <Card
                // dividerStyle={{ backgroundColor: 'pink' }}
                containerStyle={{
                 
                  backgroundColor: '#191717',
                  width: '42%',
                  // margin: 22,
                  // height:'80%',
                  borderWidth: 0
                }}
                image={{ uri: 'https://daily.jstor.org/wp-content/uploads/2017/11/dim_sum_dumplings_1050x700.jpg' }}
                imageStyle={{ backgroundColor: '#191717', height: 90 }}
                featuredTitle={'Offer 2'}
                featuredTitleStyle={{ fontSize: 22, fontWeight: 'bold' }}
              />

         <Card
                // dividerStyle={{ backgroundColor: 'pink' }}
                containerStyle={{
                 
                  backgroundColor: '#191717',
                  width: '42%',
                  // margin: 22,
                  // height:'80%',
                  borderWidth: 0
                }}
                image={{ uri: 'https://www.gourmetfoodstore.com/images/gfs/topcat/right-french-cheese.jpg' }}
                imageStyle={{ backgroundColor: '#191717', height: 90 }}
                featuredTitle={'Offer 3'}
                featuredTitleStyle={{ fontSize: 22, fontWeight: 'bold' }}
              />
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
        color="#7f30c9"
        size={25}
      />
      <Text
        style={{
          marginTop: '10%',
          color: '#fff',
          fontSize: 15,
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
    color: '#191717',
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
