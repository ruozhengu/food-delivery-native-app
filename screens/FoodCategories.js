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
    image: 'https://daily.jstor.org/wp-content/uploads/2017/11/dim_sum_dumplings_1050x700.jpg',
  },
  {
    name: 'Indian',
    image: 'https://s3-media2.fl.yelpcdn.com/bphoto/ynj5HBZ4MvYeNzeYBrQcJg/ls.jpg',
  },
  {
    name: 'Italian',
    image: 'http://finedininglovers.cdn.crosscast-system.com/BlogPost/l_4620_StockFood-00400734.jpg',
  },
  {
    name: 'French',
    image: 'https://www.gourmetfoodstore.com/images/gfs/topcat/right-french-cheese.jpg',
  },
  {
    name: 'Spicy',
    image: 'https://img.aws.livestrongcdn.com/ls-article-image-673/ds-photo/getty/article/83/159/496069654.jpg',
  },
  {
    name: 'Polish',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Kielbasas.jpg/200px-Kielbasas.jpg',
  },
  {
    name: 'German',
    image: 'https://i.ytimg.com/vi/qgC9JY5y7Kc/maxresdefault.jpg',
  },
];

export default class FoodCategoryScreen extends Component {
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
            dataSource: ds.cloneWithRows(data),
          },
          function() {
            // In this block you can do something with new state.
            this.arrayholder = data;
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
      const itemData = item.name.toUpperCase();
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
            onPress={() => this.props.navigation.navigate('RestaurantList')}
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
                image={{ uri: rowData.image }}
                imageStyle={{ backgroundColor: '#000', height: 120 }}
                featuredTitle={rowData.name}
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