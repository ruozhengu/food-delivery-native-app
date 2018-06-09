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
import { WebBrowser } from 'expo';

import {
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from 'react-native-material-cards';
import { Card } from 'react-native-elements'; // Version can be specified in package.json

import { MonoText } from '../components/StyledText';

export default class SpecialOffers extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Special Offers</Text>
          </View>
          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>
              Special Offers go here.
            </Text>

            <View style={styles.container}>
              <Text style={styles.paragraph}>
                Change code in the editor and watch it change on your phone!
                Save to get a shareable url.
              </Text>

            ListView
        dataSource={ ['aaa','gbgv','aswdd','gaaesdf'] }
        
        
        

        renderRow={(rowData) => (
          <TouchableOpacity
          style={{
            backgroundColor: 'pink',
            width: '55%',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <Card
            dividerStyle={{ backgroundColor: 'pink' }}
            containerStyle={{
              backgroundColor: 'transparent',
              height:100,
              paddingBottom:100,
              width: '90%',
              marginTop: 0,
            }}
            image={{ uri: 'https://placeimg.com/640/480/tech' }}
            imageStyle={{backgroundColor:'#000', height: 200}}
            featuredTitle={rowData.name}
            featuredTitleStyle={{ fontSize: 22, fontWeight: 'bold', marginBottom:'50%' }}>
            

          </Card>
        </TouchableOpacity>

         )}

        />


            </View>
          </View>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {


  },
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
