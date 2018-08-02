import React, { Component } from 'react';
import { Constants } from 'expo';

import {
  Image, 
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  ListView,
  TextInput,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { Icon, Card } from 'react-native-elements'; // Version can be specified in package.json

import { MaterialIcons, FontAwesome, Ionicons, MaterialCommunityIcons, SimpleLineIcons, Feather } from '@expo/vector-icons';
import { StatusBar } from 'react-native'




import Amplify, { API } from 'aws-amplify';
import aws_exports from '../aws-exports';
Amplify.configure(aws_exports);




let data = [
  {
    name: 'Congee Queen',
    image: 'https://daily.jstor.org/wp-content/uploads/2017/11/dim_sum_dumplings_1050x700.jpg',
  },
  {
    name: 'Oriental',
    image: 'https://s3-media2.fl.yelpcdn.com/bphoto/ynj5HBZ4MvYeNzeYBrQcJg/ls.jpg',
  },
  {
    name: 'Sogos',
    image: 'http://finedininglovers.cdn.crosscast-system.com/BlogPost/l_4620_StockFood-00400734.jpg',
  },
  {
    name: 'La Senza',
    image: 'https://www.gourmetfoodstore.com/images/gfs/topcat/right-french-cheese.jpg',
  },
  {
    name: 'Biryani House',
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


  async componentDidMount() {
    console.log('getRestaurant started')

      const path = "/RestaurantProfileTable";
      try {
        const apiResponse = await API.get("RestaurantProfileTableCRUD", path);
        //this.setState({apiResponse});
        let ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2,
        });
        console.log('after API Response')
        console.log(apiResponse)
              this.setState(
          {
            isLoading: false,
            dataSource: ds.cloneWithRows(apiResponse),
          },
          function() {
            // In this block you can do something with new state.
            this.arrayholder = apiResponse;
          }
        );
      } catch (e) {
        console.log(e);
      }

  }


  // componentDidMount() {
  //   return fetch('https://reactnativecode.000webhostapp.com/FruitsList.php')
  //     .then(response => response.json())
  //     .then(responseJson => {
  //       let ds = new ListView.DataSource({
  //         rowHasChanged: (r1, r2) => r1 !== r2,
  //       });
  //       this.setState(
  //         {
  //           isLoading: false,
  //           dataSource: ds.cloneWithRows(data),
  //         },
  //         function() {
  //           // In this block you can do something with new state.
  //           this.arrayholder = data;
  //         }
  //       );
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }

  GetListViewItem(fruit_name) {
    Alert.alert(fruit_name);
  }

  SearchFilterFunction(text) {
    const newData = this.arrayholder.filter(function(item) {
      const itemData = item.rest_name.toUpperCase();
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
    StatusBar.setBarStyle('light-content', true);
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
            <View style={{width:'100%', }}><Text style={{fontSize:20, textAlign:'center', color:'#fff' }}>Search All Restaurants</Text></View>
            )}
            
          renderRow={rowData => (
            <TouchableOpacity
              onPress={() =>
              this.props.navigation.navigate('Restaurant', {
                data: rowData,
              })
            }
              style={{
                // backgroundColor: 'rgba(0,0,0,0.5)',
                width: '50%',
                alignItems: 'center',

                marginTop: 12,
                height: 120,
                // opacity:1,

                // paddingBottom: 10,
                paddingLeft: 4,
                paddingRight: 4,
              }}>
              
              <ImageBackground
                // dividerStyle={{ backgroundColor: 'pink' }}
                style={{
                  // backgroundColor: 'rgba(0,0,0,0.5)',
                  // opacity:0.2,
                  height: '100%',
                  width: '100%',
                  marginTop: 0,
                  borderWidth: 0
                }}
                source={{ uri: rowData.image }}
                // imageStyle={{ backgroundColor: 'rgba(0,0,0,.6)', height: 120, }}
                // featuredTitle={rowData.rest_name}
                // featuredTitleStyle={{ fontSize: 22, fontWeight: 'bold'}}
              >
              <View style={{height: '100%', justifyContent:'center',backgroundColor:'rgba(0,0,0,0.4)',}}><Text style={{
                // position: 'absolute',
                            // top:'40%',
                            // backgroundColor:'rgba(1,1,1,1)',  
                            fontSize:22,
                            alignSelf: 'center', 
                            justifyContent:'center',
                            color:"#fff"}}>
                            {rowData.rest_name}
                            </Text></View>
              </ImageBackground>
              
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
    padding: 8,
    // paddingRight: 7,
    // marginTop: Constants.statusBarHeight,
    backgroundColor: '#191717'
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