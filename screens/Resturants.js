import React, { Component } from 'react';
import {
  Alert,
  TouchableOpacity,
  Dimensions,
  Image,
  ListView,
  PixelRatio,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { Icon, Card } from 'react-native-elements'; // Version can be specified in package.json

let data = [
  {
    name: 'McDonalds',
    image: 'https://images.pexels.com/photos/89432/pexels-photo-89432.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb',
    distance: '15-20km',
    category: 'Mexican',
    rating: 3.5,
  },
  {
    name: 'KFC',
    image: 'https://placeimg.com/640/480/tech',
    distance: '15-20km',
    category: 'Mexican',
    rating: 3.5,
  },
  {
    name: 'Italian',
    image: 'https://images.pexels.com/photos/89432/pexels-photo-89432.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb',
    distance: '15-20km',
    category: 'Mexican',
    rating: 3.5,
  },
  {
    name: 'French',
    image: 'https://images.pexels.com/photos/89432/pexels-photo-89432.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb',
    distance: '15-20km',
    category: 'Mexican',
    rating: 3.5,
  },
];

class FoodCategories extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
      }).cloneWithRows(data),
    };
  }

  render() {
    const { onScroll = () => {} } = this.props;
    return (
      <ListView
        contentContainerStyle={styles.listContainer}
        dataSource={this.state.dataSource}
        renderRow={rowData => (
          <TouchableOpacity style={styles.touchable}>
            <Card containerStyle={styles.card} image={{ uri: rowData.image }}>
              <View style={styles.topRow}>
                <Text style={styles.restaurantName}> {rowData.name} </Text>
                <Text style={styles.distance}> {rowData.distance} </Text>
              </View>
              <View style={styles.bottomRow}>
                <Text style={styles.category}> {rowData.category} </Text>
                <Text style={styles.rating}><Icon
   name='g-translate'
  color='yellow'
  size='15'
  onPress={() => console.log('hello')}/> {rowData.rating} </Text>
              </View>
            </Card>
          </TouchableOpacity>
        )}
        renderScrollComponent={props => (
          <ParallaxScrollView
            onScroll={onScroll}
            headerBackgroundColor="#fff"
            stickyHeaderHeight={STICKY_HEADER_HEIGHT}
            parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
            backgroundSpeed={10}
            renderBackground={() => (
              <View key="background">
                <Image
                  source={{
                    uri: 'https://i.pinimg.com/736x/7b/ff/9f/7bff9fcfe8d530c7326a57ba66479b81--restaurant-branding-restaurant-interiors.jpg',
                    width: window.width,
                    height: PARALLAX_HEADER_HEIGHT,
                  }}
                />
                <View
                  style={{
                    position: 'absolute',
                    top: 0,
                    width: window.width,
                    backgroundColor: 'rgba(0,0,0,0.4)',
                    height: PARALLAX_HEADER_HEIGHT,
                  }}
                />
              </View>
            )}
            renderForeground={() => (
              <View key="parallax-header" style={styles.parallaxHeader}>
                <Text style={styles.Title}>
                  Restaurants
                </Text>
              </View>
            )}
          />
        )}
      />
    );
  }
}

const window = Dimensions.get('window');

const AVATAR_SIZE = 120;
const ROW_HEIGHT = 60;
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
    backgroundColor: 'rgba(0,0,0,0.4)',
    flexDirection: 'row',
  },

  restaurantName: { marginRight: 50, marginBottom: 0, marginTop: 0 },
  distance: {},
  bottomRow: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    flexDirection: 'row',
  },
  category: {},
  price: {},
  rating: {},
  Title: {
    color: 'white',
    fontSize: 32,
    paddingVertical: 5,
  },
});

export default FoodCategories;
