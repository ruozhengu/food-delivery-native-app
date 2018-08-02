import React, { Component } from 'react';
import {
  Alert,
  Button,
  TextInput,
  ImageBackground,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { Location, Permissions } from 'expo';
import AwesomeButtonRick from 'react-native-really-awesome-button';
import { MaterialIcons } from '@expo/vector-icons';


import Amplify, { API } from 'aws-amplify';
import aws_exports from '../aws-exports';
Amplify.configure(aws_exports);



export default class LaunchScreen extends Component {
  constructor(props) {
    super(props);

    this.state = { locationResult: null, apiResponse: null, noteId: '111' };
    this.handleFindPress = this.handleFindPress.bind(this);
  }


  componentDidMount() {
    this._getLocationAsync();
  }

  

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        locationResult: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ locationResult: JSON.stringify(location) });
  };


    async getDriver() {
      console.log('getDriver started')
      const path = "/DriverTable";

      try {
        console.log('try started')
        const apiResponse = await API.get("DriverTableCRUD", path);
        console.log('After api response')
        console.log(apiResponse);
        this.setState({apiResponse});
      } catch (e) {
        console.log(e);
      }
    }

    async saveCustomer() {
    console.log('save customer called')
    let newCustomer = {
      body: {
        "cust_id": this.state.username,
        "default_address": {},
        "email":"",
        "firstname":"",
        "history_order_id": "",
        "lastname":"",
        "phone":this.state.phone_number,
        "profile_img": "http://advaion.com/wp-content/uploads/2017/11/placeholder.png",
        "real_address":{},
        "sex":""
      }
    }
    const path = "/CustomerTable";

    // Use the API module to save the note to the database
    console.log('reached try block')
    try {
      console.log('try start')
      const apiResponse = await API.put("CustomerTableCRUD", path, newRestaurant)
      console.log('apiResponse called')
      console.log(apiResponse);
      this.setState({apiResponse});
    } catch (e) {
      console.log(e);
    }
  }
  

  // Create a new Note according to the columns we defined earlier
  async saveRestaurant() {
    console.log('save rating called')
    let newRestaurant = {
      body: {
  "category": "new test 1",
  "closetime": "11pm",
  "curr_holding_count": 0,
  "email": "kfc@ofwa.com",
  "image": "http://digitalspyuk.cdnds.net/17/26/980x490/landscape-1498837520-kfc-chicken-1.jpg",
  "item_count_number": 14,
  "location": "44 clifton's Wharf, Norhtja jwjaf",
  "menu": [
    {
    category: 'Main',
    item_id: 'porkdumpling1',
    name: 'Pork Dumplings',
    image:
      'https://www.gourmetfoodstore.com/images/gfs/topcat/right-french-cheese.jpg',
    price: '$$',
    spicy: 'hot',
    rest_id: 'kfc1'
  },  {
    category: 'Main',
    item_id: 'shrimpfriedrice1',
    name: 'Shrimp Fried Rice',
    image:
      'https://s3-media2.fl.yelpcdn.com/bphoto/ynj5HBZ4MvYeNzeYBrQcJg/ls.jpg',
    price: '$$',
    spicy: 'medium',
    rest_id: 'kfc1'
  },  {
    category: 'Dessert',
    item_id: 'chickencurry1',
    name: 'Chicken Curry',
    image:
      'http://finedininglovers.cdn.crosscast-system.com/BlogPost/l_4620_StockFood-00400734.jpg',
    price: '$$$',
    spicy: 'hot',
    rest_id: 'kfc1'
  }],
  "mtl_order_count": 43,
  "mtl_revenue": 665,
  "onduty": true,
  "opentime": "9:00 AM",
  "owner_name": "Gabriel Gu",
  "phone": "kfc 134 2156",
  "rating": 3,
  "rest_id": "commontest1",
  "rest_name": "common test",
  "spicy_level": "hot",
  "total_order_count": 11,
  "total＿revenue": 44,
  "url": "www.kfc.com",
  "reviews": [
  {rating:5,
    comment:'TERRRIBBLLEEEE FOOOODDDDDDD',
    cust_id:'ali212', 
    cust_name: "Megan Washington", 
    cust_image: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg", 
    rest_id:'kfc1'
  },
  {rating:5,
    comment:'Worst Food Every',
    cust_id:'gab212', 
    cust_name: "Gabriel Gu", 
    cust_image: "https://scontent.fybz1-1.fna.fbcdn.net/v/t1.0-9/31502761_579624915749268_6836237842327273472_n.jpg?_nc_cat=0&oh=1dcc79e8c4bf387980043b63c3ff99f5&oe=5BC05D63", 
    rest_id:'testkfc1'
  },
  ]
}
    }
    const path = "/RestaurantProfileTable";

    // Use the API module to save the note to the database
    console.log('reached try block')
    try {
      console.log('try start')
      const apiResponse = await API.put("RestaurantProfileTableCRUD", path, newRestaurant)
      console.log('apiResponse called')
      console.log(apiResponse);
      this.setState({apiResponse});
    } catch (e) {
      console.log(e);
    }
  }


   async saveDriver() {
    console.log('save Driver called')
    let newDriver = {
      body: {
        "userId":'bbbb',
        "driverId":"bbbb",
        "curr_holding_count":10,
        "dly_completed_count":10,
        "dly_earning":10,
        "driving_license_id":"2esdqw",
        "email":"fwee32",
        "location":{},
        "mtl_completed_count":10,
        "mtl_earning":10,
        "onduty":true,
        "phone":"saf",
        "plate":"3r2dfc",
        "sex":"male",
        "taker_name": "ali",
        "working_hour":43,
      }
    }
    const path = "/DriverTable";

    // Use the API module to save the note to the database
    console.log('reached try block')
    try {
      console.log('try start')
      const apiResponse = await API.put("DriverTableCRUD", path, newDriver)
      console.log('apiResponse called')
      console.log(apiResponse);
      this.setState({apiResponse});
    } catch (e) {
      console.log(e);
    }
  }


  handleFindPress() {
    console.log('Find me button pressed');
    //this.saveRating();
    this.props.navigation.navigate('Main', {location:this.state.locationResult});
  }
  
  handleClosePress() {
    console.log('close button pressed');
    Alert.alert(this.state.locationResult);
    //this.getRating();
    console.log('After get rating');
    this.props.navigation.navigate('Main', {location:this.state.locationResult});
  }


    // async getInfo() {
    //   console.log('getInfo started')
    //   const path = 'https://dw4tuyklva.execute-api.us-east-1.amazonaws.com/prod-test/createorder?{&cust_id=000001&phone=12342222&location={&unit=3&streetNumber=140&streetName=Clifton Ave&city=Toronto&postalCode=N2L3G5&},&extra_comment=I want more rice&order=[&{&category=main&item_id=3&name=curry chicken&price=7.1&rest_id=000000&spicy=hot&url"=www.google.com&}&]&}';

    //   try {
    //     console.log('try started')
    //     const apiResponse = await API.get("DriverTableCRUD", path);
    //     console.log('After api response')
    //     console.log(apiResponse);
    //     this.setState({apiResponse});
    //   } catch (e) {
    //     console.log(e);
    //   }
    // }


  async getInfo() {
    url = 'https://dw4tuyklva.execute-api.us-east-1.amazonaws.com/prod-test/createorder?{&cust_id=000001&phone=12342222&location={&unit=3&streetNumber=140&streetName=Clifton Ave&city=Toronto&postalCode=N2L3G5&},&extra_comment=I want more rice&order=[&{&category=main&item_id=3&name=curry chicken&price=7.1&rest_id=000000&spicy=hot&url"=www.google.com&}&]&}'
    return fetch(url, {
            method: 'GET',
            headers: {
                'Cache-control': 'no-cache',
                'Content-Type': 'application/json'
            }
        })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson)
      })
      .catch(error => {
        console.error(error);
      });
  }


  render() {
    return (
      <ImageBackground
        source={{
          uri:
            'https://images.pexels.com/photos/89432/pexels-photo-89432.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb',
        }}
        style={styles.backgroundImage}>
        <View style={styles.overlay} />

        <View style={styles.close}>
          <MaterialIcons
          name="close" 
          color="white" 
          size={35} 
          onPress={()=> this.getInfo()} />
        </View>

        <Text style={styles.heading}>Hungry?</Text>
        <Text style={styles.paragraph}>Let's find something to eat</Text>
        <TextInput
          placeholder="Enter your address"
          returnKeyType="go"
          underlineColorAndroid='#e8e1e1'
          style={styles.textInput}
        />
        <Text style={styles.paragraph}>or</Text>
        <View style={styles.button}>
          <AwesomeButtonRick
            backgroundShadow="#074a7a"
            backgroundColor="#1073ba"
            backgroundActive="#074a7a"
            type="primary"
            onPress={() => this.handleFindPress()}>
            Find Me!
          </AwesomeButtonRick>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000',
  },
  close: {
    position: 'absolute',
    top: 46,
    right: 40,
    width: 35,
    height: 35,
    alignItems:'center',
    justifyContent:'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: '#000',
    opacity: 0.6,
  },
  heading: {
    fontSize: 44,
    margin: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '30%',
    color: '#e8e1e1',
  },
  paragraph: {
    fontSize: 24,
    margin: 24,
    fontWeight: '400',
    textAlign: 'center',
    color: '#e8e1e1',
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'center',
  },
  textInput: {
    height: 60,
    borderColor: '#000',
    backgroundColor: '#e8e1e1',
    borderWidth: 3,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});
