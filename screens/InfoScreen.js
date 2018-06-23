import React, { Component } from 'react';
import {
  Linking,
  Alert,
  Switch,
  Dimensions,
  Image,
  ListView,
  PixelRatio,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Avatar, Icon, ListItem } from 'react-native-elements';
import { Constants, MapView } from 'expo';

import {
  MaterialIcons,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
  Feather,
} from '@expo/vector-icons';

const data = {
  email: 'myrestaurant@gmail.com',
  phone: '209-532-7895',
  address: "15 Merchant's Wharf, Toronto",
  latitude: 43.642234,
  longitude: -79.376046,
};

export default class App extends Component {
  static navigationOptions = {
    header: null,
  };
  
    state = {
    mapRegion: {
      latitude: data.latitude,
      longitude: data.longitude,
      latitudeDelta: 0.0622,
      longitudeDelta: 0.0321,
    },
  };


  constructor(props) {
    super(props);
  }

  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };

  render() {
    const email = 'mailto:' + data.email + '?subject=mailsubject&body=mailbody';
    // Alert.alert(email)
    const { onScroll = () => {} } = this.props;
    return (
      <View>
      <View style={{ alignSelf: 'stretch', height: '32%' }}>
        <ListItem
          title={data.email}
          containerStyle={styles.listItemContainer}
          leftIcon={
            <MaterialIcons
              style={{ padding: 5 }}
              name="email"
              color="#a09f9f"
              size={25}
            />
          }
          rightIcon={
            <MaterialIcons
              name="keyboard-arrow-right"
              color="#a09f9f"
              size={35}
            />
          }
          onPress={() => {
            Linking.openURL({email});
          }}
        />

        <ListItem
          title={data.phone}
          containerStyle={styles.listItemContainer}
          leftIcon={
            <MaterialIcons
              style={{ padding: 5 }}
              name="call"
              color="#a09f9f"
              size={25}
            />
          }
          rightIcon={
            <MaterialIcons
              name="keyboard-arrow-right"
              color="#a09f9f"
              size={35}
            />
          }
          onPress={() => Alert.alert('aasfaf')}
        />

        <ListItem
          title={data.address}
          containerStyle={styles.listItemContainer}
          leftIcon={
            <MaterialIcons
              style={{ padding: 3 }}
              name="location-city"
              color="#a09f9f"
              size={25}
            />
          }
          rightIcon={
            <MaterialIcons
              name="keyboard-arrow-right"
              color="#a09f9f"
              size={35}
            />
          }
          onPress={() => Alert.alert('aasfaf')}
        />

              
        </View>
        <View style={{ alignSelf: 'stretch', height: '70%' }}>
        <MapView
          style={{ alignSelf: 'stretch', height: '100%' }}
          region={this.state.mapRegion}
          zoomEnabled={false}
          scrollEnabled={false}
          loadingEnabled={true}
          
        >
                      <MapView.Marker
          coordinate={ this.state.mapRegion }
        />
      
        
      </MapView>
      </View>
      </View>
    );
  }
}

const Chevron = () => (
  <Icon
    name="chevron-right"
    type="entypo"
    color="blue"
    containerStyle={{ marginLeft: -15, width: 20 }}
  />
);

const InfoText = ({ text }) => (
  <View
    style={{
      paddingTop: 20,
      paddingBottom: 12,
      backgroundColor: '#F4F5F4',
    }}>
    <Text
      style={{
        fontSize: 16,
        marginLeft: 20,
        color: 'gray',
        fontWeight: '500',
      }}>
      {text}
    </Text>
  </View>
);

const BaseIcon = ({ containerStyle, icon }) => (
  <View
    style={{
      alignItems: 'center',
      backgroundColor: 'black',
      borderColor: 'transparent',
      borderRadius: 10,
      borderWidth: 1,
      height: 34,
      justifyContent: 'center',
      marginLeft: 10,
      marginRight: 18,
      width: 34,
    }}>
    <Icon
      size={24}
      color="white"
      type="material"
      name="notifications"
      {...icon}
    />
  </View>
);

const window = Dimensions.get('window');

const AVATAR_SIZE = 120;
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 350;
const STICKY_HEADER_HEIGHT = 70;

const styles = StyleSheet.create({
    mapContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  scroll: {
    backgroundColor: 'white',
  },
  userRow: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 8,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 6,
  },
  userImage: {
    marginRight: 12,
  },
  listItemContainer: {
    height: 55,
    borderWidth: 0.5,
    borderColor: '#ECECEC',
    backgroundColor:'#fff'
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: window.width,
    height: PARALLAX_HEADER_HEIGHT,
  },
  stickySection: {
    height: STICKY_HEADER_HEIGHT,
    width: 300,
    justifyContent: 'flex-end',
  },
  stickySectionText: {
    color: 'white',
    fontSize: 20,
    margin: 10,
  },
  fixedSection: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  fixedSectionText: {
    color: '#999',
    fontSize: 20,
  },
  parallaxHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    flex: 1,
    flexDirection: 'column',
  },
  avatar: {
    // marginBottom: 10,
    alignSelf: 'center',
    // justifyContent: 'center',
    borderRadius: AVATAR_SIZE / 2,
  },
  sectionSpeakerText: {
    color: 'white',
    fontSize: 24,
    paddingVertical: 5,
  },
  sectionTitleText: {
    color: 'white',
    fontSize: 18,
    paddingVertical: 5,
  },
  row: {
    overflow: 'hidden',
    paddingHorizontal: 10,
    height: ROW_HEIGHT,
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
  rowText: {
    fontSize: 20,
  },
});
