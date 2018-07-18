import React, { Component } from 'react';
import {
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

import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { MaterialIcons, FontAwesome, Ionicons, MaterialCommunityIcons, SimpleLineIcons, Feather } from '@expo/vector-icons';
// import MaterialIcons from '../Icons/MaterialIcons.tff';
// import Ionicons from '../Icons/Ionicons.tff';
// import MaterialCommunityIcons from '../Icons/MaterialCommunityIcons.tff';


export default class ProfileScreen extends Component {
  // static navigationOptions = {
  //   header: null,
  //     tabBarLabel : "Profile",
  // tabBarIcon : ({focused}) => (
  //   <Feather 
  //     name="user"
  //     size={25}
  //   />
  // )
  // };

  constructor(props) {
    super(props);
  }

  render() {
    const { onScroll = () => {} } = this.props;
    return (
      <ParallaxScrollView
        onScroll={onScroll}
        headerBackgroundColor="#fff"
        stickyHeaderHeight={80}
        parallaxHeaderHeight={210}
        backgroundSpeed={10}
        renderBackground={() => (
          <View key="background">
            <Image
              source={{
                uri: 'https://placeimg.com/640/480/animals',
                width: window.width,
                height: 210,
                paddingTop: 22,
                marginTop: 22,
              }}
            />
            <View
              style={{
                position: 'absolute',
                top: 0,
                width: window.width,
                backgroundColor: 'rgba(0,0,0,.4)',
                height: PARALLAX_HEADER_HEIGHT,
              }}
            />
          </View>
        )}
        renderForeground={() => (
          <View key="parallax-header" style={styles.parallaxHeader}>
            <Image
              style={styles.avatar}
              source={{
                uri: 'https://scontent.fybz1-1.fna.fbcdn.net/v/t1.0-9/31502761_579624915749268_6836237842327273472_n.jpg?_nc_cat=0&oh=1dcc79e8c4bf387980043b63c3ff99f5&oe=5BC05D63',
                width: AVATAR_SIZE,
                height: AVATAR_SIZE,
              }}
            />


            <Text
              style={{
                color: 'white',
                fontSize: 24,
                paddingTop: 15,
              }}>
              Gabriel Gu
            </Text>

          </View>
        )}>
        
        
        <InfoText text="Account" />
        <ListItem
          hideChevron
          switchButton={true}
          title="Push Notifications"
          containerStyle={styles.listItemContainer}
          leftIcon={<MaterialIcons 
    style={{ padding: 3,}} 
    name='notifications-none' 
    color='#a09f9f'
    size={25}
    />}

        />
        
        <ListItem
          title="Change Location"
          containerStyle={styles.listItemContainer}
          leftIcon={<MaterialIcons 
    style={{ padding: 3,}} 
    name='edit-location' 
    color='#a09f9f'
    size={25}
    />}
    rightIcon={<MaterialIcons 
    name='keyboard-arrow-right' 
    color='#a09f9f'
    size={35}
    />}
          onPress={()=>Alert.alert('aasfaf')}
        />

        <ListItem
          title="Change Number"
          containerStyle={styles.listItemContainer}
          leftIcon={<MaterialIcons 
    style={{ padding: 3,}} 
    name='phone-iphone' 
    color='#a09f9f'
    size={25}
    />}
    rightIcon={<MaterialIcons 
    name='keyboard-arrow-right' 
    color='#a09f9f'
    size={35}
    />}
          onPress={()=>Alert.alert('aasfaf')}
        />
        
        <ListItem
          title="Change Profile Picture"
          containerStyle={styles.listItemContainer}
          leftIcon={<MaterialCommunityIcons 
    style={{ padding: 3,}} 
    name='face-profile' 
    color= '#a09f9f'
    size={25}
    />}
    rightIcon={<MaterialIcons 
    name='keyboard-arrow-right' 
    color='#a09f9f'
    size={35}
    />}
          onPress={()=>Alert.alert('aasfaf')}
        />
        
        <InfoText text="More" />
        
        
        <ListItem
          title="Rate Us"
          containerStyle={styles.listItemContainer}
          leftIcon={<MaterialIcons 
    style={{ padding: 3,}} 
    name='rate-review' 
    color='#a09f9f'
    size={25}
    />}
    rightIcon={<MaterialIcons 
    name='keyboard-arrow-right' 
    color='#a09f9f'
    size={35}
    />}
          onPress={()=>Alert.alert('aasfaf')}
        />
        
        
        <ListItem
          title="Contact Us"
          containerStyle={styles.listItemContainer}
          leftIcon={<MaterialIcons 
    style={{ padding: 3,}} 
    name='perm-phone-msg' 
    color='#a09f9f'
    size={25}
    />}
    rightIcon={<MaterialIcons 
    name='keyboard-arrow-right' 
    color='#a09f9f'
    size={35}
    />}
          onPress={()=>Alert.alert('aasfaf')}
        />
        

      </ParallaxScrollView>
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
