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
import { Card } from 'react-native-elements'; // Version can be specified in package.json


let data = [
        {name: 'Chinese', image: 'https://images.pexels.com/photos/89432/pexels-photo-89432.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb'},
        {name: 'Indian', image: 'https://images.pexels.com/photos/89432/pexels-photo-89432.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb'},
        {name: 'Italian', image: 'https://images.pexels.com/photos/89432/pexels-photo-89432.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb'},
        {name: 'French', image: 'https://images.pexels.com/photos/89432/pexels-photo-89432.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb'},
        {name: 'Spicy', image: 'https://images.pexels.com/photos/89432/pexels-photo-89432.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb'},
        {name: 'Polish', image: 'https://images.pexels.com/photos/89432/pexels-photo-89432.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb'},
        {name: 'German', image: 'https://images.pexels.com/photos/89432/pexels-photo-89432.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb'},
        {name: 'food', image: 'https://images.pexels.com/photos/89432/pexels-photo-89432.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb'},
        {name: 'Category 9', image: 'https://images.pexels.com/photos/89432/pexels-photo-89432.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb'},
        {name: 'Category 10', image: 'https://images.pexels.com/photos/89432/pexels-photo-89432.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb'},
        {name: 'Category 11', image: 'https://images.pexels.com/photos/89432/pexels-photo-89432.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb'},
        {name: 'Category 12', image: 'https://images.pexels.com/photos/89432/pexels-photo-89432.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb'},
        {name: 'Category 13', image: 'https://images.pexels.com/photos/89432/pexels-photo-89432.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb'},
        {name: 'Category 14', image: 'https://images.pexels.com/photos/89432/pexels-photo-89432.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb'},
      ];


class FoodCategories extends Component {


  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state =  {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }).cloneWithRows(data)
    };
  }


  render() {
    const { onScroll = () => {} } = this.props;
    return (
      <ListView
        ref="ListView"
        style={styles.container}
        dataSource={ this.state.dataSource }

        renderRow={(rowData) => (
          <TouchableOpacity onPress={()=>{Alert.alert(rowData.name)}}>
          <View key={rowData} style={ styles.rowContainer }>
              <Image source={{ uri: rowData.image}} style={styles.photo} />
            <Text style={ styles.rowText }>
              { rowData.name }
            </Text>
          </View>
          </TouchableOpacity>
         )}


        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}


        renderScrollComponent={props => (
          <ParallaxScrollView
            onScroll={onScroll}

            headerBackgroundColor="#fff"
            stickyHeaderHeight={ STICKY_HEADER_HEIGHT }
            parallaxHeaderHeight={ PARALLAX_HEADER_HEIGHT }
            backgroundSpeed={10}


            renderBackground={() => (
              <View key="background">
                <Image source={{uri: 'https://i.pinimg.com/736x/7b/ff/9f/7bff9fcfe8d530c7326a57ba66479b81--restaurant-branding-restaurant-interiors.jpg',
                                width: window.width,
                                height: PARALLAX_HEADER_HEIGHT}}/>
                <View style={{position: 'absolute',
                              top: 0,
                              width: window.width,
                              backgroundColor: 'rgba(0,0,0,0.4)',
                              height: PARALLAX_HEADER_HEIGHT}}/>
              </View>
            )}


            renderForeground={() => (
              <View key="parallax-header" style={ styles.parallaxHeader }>
                <Text style={ styles.Title }>
                  Categories
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
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: window.width,
    height: PARALLAX_HEADER_HEIGHT
  },
  stickySection: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

  },
  stickySectionText: {
    color: 'white',
    fontSize: 20,
    margin: 10
  },
    photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  fixedSection: {
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  fixedSectionText: {
    color: '#999',
    fontSize: 20
  },
  parallaxHeader: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    paddingTop: 50
  },
  avatar: {
    marginBottom: 10,
    borderRadius: AVATAR_SIZE / 2
  },
  Title: {
    color: 'white',
    fontSize: 32,
    paddingVertical: 5,
  },
  sectionTitleText: {
    color: 'white',
    fontSize: 18,
    paddingVertical: 5
  },
  row: {
    overflow: 'hidden',
    paddingHorizontal: 10,
    height: ROW_HEIGHT,
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderBottomWidth: 1,
    justifyContent: 'center'
  },
  rowText: {
    fontSize: 20,
    marginLeft: 12,

  },
    rowContainer: {
    flex: 1,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
    separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});

export default FoodCategories;