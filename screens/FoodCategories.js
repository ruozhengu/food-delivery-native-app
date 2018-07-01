import React, { Component } from 'react';

import {
  Image, 
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  ListView,
  TextInput,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { Icon, Card } from 'react-native-elements'; // Version can be specified in package.json

import { MaterialIcons, FontAwesome, Ionicons, MaterialCommunityIcons, SimpleLineIcons, Feather } from '@expo/vector-icons';


let data = [
  {
    name: 'Chinese',
    image: 'https://images.pexels.com/photos/89432/pexels-photo-89432.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb',
  },
  {
    name: 'Indian',
    image: 'https://images.pexels.com/photos/89432/pexels-photo-89432.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb',
  },
  {
    name: 'Italian',
    image: 'https://images.pexels.com/photos/89432/pexels-photo-89432.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb',
  },
  {
    name: 'French',
    image: 'https://images.pexels.com/photos/89432/pexels-photo-89432.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb',
  },
  {
    name: 'Spicy',
    image: 'https://images.pexels.com/photos/89432/pexels-photo-89432.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb',
  },
  {
    name: 'Polish',
    image: 'https://images.pexels.com/photos/89432/pexels-photo-89432.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb',
  },
  {
    name: 'German',
    image: 'https://images.pexels.com/photos/89432/pexels-photo-89432.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb',
  },
  {
    name: 'food',
    image: 'https://images.pexels.com/photos/89432/pexels-photo-89432.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb',
  },
  {
    name: 'Category 9',
    image: 'https://images.pexels.com/photos/89432/pexels-photo-89432.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb',
  },
  {
    name: 'Category 10',
    image: 'https://images.pexels.com/photos/89432/pexels-photo-89432.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb',
  },
  {
    name: 'Category 11',
    image: 'https://images.pexels.com/photos/89432/pexels-photo-89432.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb',
  },
  {
    name: 'Category 12',
    image: 'https://images.pexels.com/photos/89432/pexels-photo-89432.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb',
  },
  {
    name: 'Category 13',
    image: 'https://images.pexels.com/photos/89432/pexels-photo-89432.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb',
  },
  {
    name: 'Category 14',
    image: 'https://images.pexels.com/photos/89432/pexels-photo-89432.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb',
  },
];

export default class App extends Component {
  static navigationOptions = {
    header: null,
      tabBarLabel : "Categories",
  tabBarIcon : ({focused}) => (
    <MaterialIcons
      name='search'
      size={25}
    />
  )
  };

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      text: '',
    };

    this.arrayholder = [];
  }

  componentDidMount() {
    return fetch('https://reactnativecode.000webhostapp.com/FruitsList.php')
      .then(response => response.json())
      .then(responseJson => {
        let ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2,
        });
        this.setState(
          {
            isLoading: false,
            dataSource: ds.cloneWithRows(responseJson),
          },
          function() {
            // In this block you can do something with new state.
            this.arrayholder = responseJson;
          }
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  GetListViewItem(fruit_name) {
    Alert.alert(fruit_name);
  }

  SearchFilterFunction(text) {
    const newData = this.arrayholder.filter(function(item) {
      const itemData = item.fruit_name.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(newData),
      text: text,
    });
  }

  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#000',
        }}
      />
    );
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={styles.MainContainer}>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: 15,
            marginBottom: 5,
            alignSelf: 'center',
            justifyContent: 'center',
          }}>
                    <Feather 
    style={{ padding: 5, backgroundColor: '#d8d7dd' }} 
    name='search' 
    color="#000"
    size={25}
    />
          <TextInput
            style={{width: '90%', textAlign: 'center', height: 40, backgroundColor: '#d8d7dd',}}
            onChangeText={text => this.SearchFilterFunction(text)}
            value={this.state.text}
            underlineColorAndroid="transparent"
            placeholder="Search Here"
          />

        </View>

        <ListView
          contentContainerStyle={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingLeft: 4,
            paddingRight: 4,
          }}
          dataSource={this.state.dataSource}
          
          renderHeader={rowData => (
            <View style={{width:'100%', }}><Text style={{fontSize:20, textAlign:'center', }}>Main Categories</Text></View>
            )}
            
          renderRow={rowData => (
            <TouchableOpacity
              style={{
                // backgroundColor: 'pink',
                width: '50%',
                alignItems: 'center',
                marginTop: 8,
                height: 120,

                // paddingBottom: 10,
                paddingLeft: 3,
                paddingRight: 3,
              }}>
              <Card
                // dividerStyle={{ backgroundColor: 'pink' }}
                containerStyle={{
                  backgroundColor: 'yellow',
                  height: '100%',
                  width: '100%',
                  marginTop: 0,
                }}
                image={{ uri: 'https://placeimg.com/640/480/animals' }}
                imageStyle={{ backgroundColor: '#000', height: 120 }}
                featuredTitle={rowData.fruit_name}
                featuredTitleStyle={{ fontSize: 22, fontWeight: 'bold' }}
              />
            </TouchableOpacity>
          )}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 7,
  },

  rowViewContainer: {
    fontSize: 17,
    padding: 10,
  },

  TextInputStyleClass: {
    width: '90%',
    textAlign: 'center',
    height: 40,
    // borderWidth: 1,
    // borderColor: '#000',
    // borderRadius: 1 ,
    backgroundColor: '#bab9bf',
  },
});