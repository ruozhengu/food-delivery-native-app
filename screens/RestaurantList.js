import React, { Component } from 'react';
import {TouchableOpacity, Dimensions, Image, ListView, StyleSheet, Text, View} from 'react-native';

import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { Icon, Card } from 'react-native-elements'; // Version can be specified in package.json

import {
  MaterialIcons,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
  Feather,
} from '@expo/vector-icons';
import { createStackNavigator } from 'react-navigation';

import RestaurantPage from './RestaurantPage';

let data = [
  {
    name: 'McDonalds',
    image:
      'https://www.mcdonalds.com/content/dam/prelaunch/ca/web/promotions/desktop/en/McDELIVERY-PromoTile.jpg',
    distance: '15-20km',
    category: 'Fast Food',
    rating: 3.5,
    price: '$$',
    timing: '11am - 12pm',
  },
  {
    name: 'KFC',
    image: 'http://digitalspyuk.cdnds.net/17/26/980x490/landscape-1498837520-kfc-chicken-1.jpg',
    distance: '15-20km',
    category: 'Fast Food',
    rating: 3.5,
    price: '$',
    timing: '11am - 12pm',
  },
  {
  name: 'Congee Queen',
    image:
      'https://cdn.doordash.com/media/restaurant/cover/Congee-Queen.png',
    distance: '15-20km',
    category: 'Chinese',
    rating: 3.5,
    price: '$',
    timing: '11am - 12pm',
  },
  {
    name: 'BBQ Tonight',
    image:
      'http://rave.pk/wp-content/uploads/2015/07/bbq.jpg',
    distance: '15-20km',
    category: 'Pakistani',
    rating: 3.5,
    price: '$$',
    timing: '11am - 12pm',
  },
];


class RestaurantList extends Component {
  static navigationOptions = {
    title: 'Home',
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
      }).cloneWithRows(data),
      // location: this.props.navigation.state.params.location,
    };
  }

  render() {
    // console.log(this.props.navigation);
    const { onScroll = () => {} } = this.props;
    return (
      <ListView
        contentContainerStyle={styles.listContainer}
        dataSource={this.state.dataSource}
        renderRow={rowData => (
          <TouchableOpacity
            style={styles.touchable}
            onPress={() =>
              this.props.navigation.navigate('Restaurant', {
                name: rowData.name,
              })
            }>
            <Card containerStyle={styles.card} image={{ uri: rowData.image }}>
              <View style={styles.topRow}>
                <Text style={styles.restaurantName}>
                  {' '}
                  {rowData.name} - {rowData.price}
                </Text>
                <Text style={styles.distance}> {rowData.distance} </Text>
              </View>
              <View style={styles.bottomRow}>
                <Text style={styles.category}>
                  {' '}
                  {rowData.category}
                  <Feather
                    style={{ padding: 1 }}
                    name="star"
                    color="#d7e035"
                    size={20}
                  />
                  {rowData.rating}
                </Text>
                <Text style={styles.timing}> {rowData.timing} </Text>
              </View>
            </Card>
          </TouchableOpacity>
        )}
        renderScrollComponent={props => (
          <ParallaxScrollView
            onScroll={onScroll}
            headerBackgroundColor="#000"
            parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
            backgroundSpeed={10}
            renderBackground={() => (
              <View key="background">
                <Image
                  source={{
                    uri:
                      'https://i.pinimg.com/736x/7b/ff/9f/7bff9fcfe8d530c7326a57ba66479b81--restaurant-branding-restaurant-interiors.jpg',
                    width: window.width,
                    height: PARALLAX_HEADER_HEIGHT,
                  }}
                />
                <View style={styles.overlay} />
              </View>
            )}
            renderForeground={() => (
              <View key="parallax-header" style={styles.parallaxHeader}>
                <Text style={styles.Title}>Restaurants</Text>
              </View>
            )}
          />
        )}
      />
    );
  }
}



export default (RootNavi = createStackNavigator(
  {
    Home: {
      screen: RestaurantList,
    },
    Restaurant: {
      screen: RestaurantPage,
    },
  },
  {
    initialRouteName: 'Home',
    // initialRouteParams: { location: 'something' },
  }
));

const window = Dimensions.get('window');


const PARALLAX_HEADER_HEIGHT = 150;
const STICKY_HEADER_HEIGHT = 70;

const styles = StyleSheet.create({
  listContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  touchable: {
    backgroundColor: '#fff',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  parallaxHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  card: {
    width: '100%',
    marginTop: 20,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  restaurantName: {
    // fontSize: 16,
    fontWeight: 'bold',
  },
  distance: {},
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  category: {},
  overlay: {
    position: 'absolute',
    top: 0,
    width: window.width,
    backgroundColor: 'rgba(0,0,0,0.4)',
    height: PARALLAX_HEADER_HEIGHT,
  },
  Title: {
    color: 'white',
    fontSize: 32,
    paddingVertical: 5,
  },
});

//export default RestaurantList;
