import React from 'react';
import {
  Image,
  Platform,
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  View,
  ListView,
  InteractionManager,
  Keyboard,
} from 'react-native';

import {  ListItem } from 'react-native-elements';

import {
  FormLabel,
  FormInput,
  FormValidationMessage,
} from 'react-native-elements';


import ActionButton from 'react-native-action-button';

import PopupDialog, { DialogTitle } from 'react-native-popup-dialog';


import {
  MaterialIcons,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
  Feather,
} from '@expo/vector-icons';
import { Badge, Icon, Avatar } from 'react-native-material-ui';

import {MapView} from 'expo'
import { addToCart, removeFromCart, emptyCart } from '../actions/actions';

import { connect } from 'react-redux';

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });


const data = {
  email: 'myrestaurant@gmail.com',
  phone: '209-532-7895',
  address: "15 Merchant's Wharf, Toronto",
  latitude: 43.642234,
  longitude: -79.376046,
};



export class Cart extends React.Component {



  static navigationOptions = ({ navigation }) => {
    badgeCount = navigation.state.params ? navigation.state.params.count : '0'
    return {
      tabBarLabel: 'Orders',
      tabBarIcon: () => (
        <Badge text={badgeCount}>
          <MaterialCommunityIcons name="cart" size={25} />
        </Badge>
      ),
    };
  };


    


constructor(props) {
    super(props);

    this.state = {
      dataSource: ds.cloneWithRows([]),
       mapRegion: {
      latitude: data.latitude,
      longitude: data.longitude,
      latitudeDelta: 0.0622,
      longitudeDelta: 0.0321,
      name: "",
      phone: "",
      unit: "",
      street: "",
      city: "",
      postalCode: "",
    },
    };
  }


componentWillMount () {
  // this.setState({navigate:true});
      console.log('compdidmount called')
    // console.log(this.state.navigate)
    // if (this.state.navigate) {
      // console.log('if statement is true')
      // this.state.navigate = false;
      this.props.navigation.navigate('RestaurantList');
      console.log('after navigation')
    // }
}

  // componentDidMount() {

  // }

  componentWillReceiveProps(nextProps) {
    if (nextProps.count != this.props.count) {
      this.setState({dataSource: ds.cloneWithRows(nextProps.data) });
      this.props.navigation.setParams({ count: nextProps.count.toString() });
    }
  }


  handleRemoveFromCart(obj) {
      this.props.dispatch(removeFromCart(obj))
    }

  handleOrderCart(){
  //   Alert.alert('Place Order',
  //     'Are you sure you want to place this order?'
  //     ,[
  //   {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
  //   {text: 'OK', onPress: () => {console.log('OK Pressed'); this.props.dispatch(emptyCart())}},
  // ])
  this.popupDialog.show();
  
  }

  handleSubmit(){
    this.props.dispatch(emptyCart());
    Keyboard.dismiss();
    this.popupDialog.dismiss();

    this.setState({
      name:"",
      phone: "",
      unit: "",
      street: "",
      city: "",
      postalCode: ""
    })

    Alert.alert("Your order is on its way!")
    
  }

  handleCancel() {
    this.popupDialog.dismiss();
    Keyboard.dismiss();
  }

  render() {
    // console.log(this.props.navigation.state)
    return (
      

      <View style={{paddingTop:12,height:'100%'}}>


      <InfoText text='Your Orders' />
       
       <View style={styles.container}>

        <ListView
        enableEmptySections={true}
        style={{backgroundColor:'#b7b3b3',height:'100%'}}
          dataSource={this.state.dataSource}
          renderRow={rowData => (
            
            <ListItem
              containerStyle={{
                backgroundColor:"#ecf0f1",
                height: 70,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              title={
                <View style={{marginLeft:10}}>
                <Text style={{fontSize:19,}}>{rowData.item.name}</Text>
                <View style={{ flexDirection: 'row', marginLeft:0}}>
                  <Text style={{ fontSize: 14 }}>$15  | </Text>
                  <MaterialCommunityIcons
                    name={'chili-' + rowData.item.spicy}
                    color="red"
                    size={18}
                  />
                </View>
                </View>
              }
              titleStyle={{ backgroundColor:'#000' }}
              avatar={<Image
          style={{width: 75, height: 50}}
          source={{uri: rowData.item.image}}
        />}
              rightIcon={
                <TouchableOpacity 
                style={{width: 65, height:42, alignItems:'center',justifyContent:'center'}}
                onPress={()=>{this.handleRemoveFromCart(rowData.item)}}
                >
                <FontAwesome
                  // style={{ alignSelf: 'center', paddingRight:13 }}
                  name="close"
                  color="#e23147"
                  size={30}
                  
                />
                </TouchableOpacity>
              }
            />


            
          )}
        />
 

                <ActionButton 
        buttonColor="rgba(231,76,60,1)"
        position='center'
        buttonColor='#000'
        size={44}
        onPress={()=>{this.handleOrderCart()}}

        renderIcon={() => <MaterialIcons
                    style={{ padding: 1, alignSelf: 'center' }}
                    name="playlist-add-check"
                    color="#fff"
                    size={30}
                  />}
        // buttonText="order"
        // buttonTextStyle={{fontSize:13}}

        />

      </View>
      

// <InfoText text={"Track your Delivery"} />

      <View style={{height:'45%'}}>

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



       <PopupDialog
                containerStyle={{paddingBottom:'30%'}}
        height={420}
        dialogTitle={<DialogTitle title="Please enter your information" titleTextStyle={{alignSelf:'center',fontSize:23,fontWeight:'bold'}} />}
    ref={(popupDialog) => { this.popupDialog = popupDialog; }}
  >

<ScrollView >
<InfoText text='Contact' />
        <FormLabel>Name</FormLabel>
        <FormInput defaultValue={this.state.name}
        onChangeText={(text) => this.setState({name:text})}/>


        <FormLabel>Phone Number</FormLabel>
        <FormInput keyboardType={'numeric'}
        defaultValue={this.state.phone} 
        onChangeText={(text) => this.setState({phone:text})}/>

<InfoText text='Address' />
                <FormLabel>Unit</FormLabel>
        <FormInput defaultValue={this.state.unit}
        onChangeText={(text) => this.setState({unit:text})}/>

                <FormLabel>Street</FormLabel>
        <FormInput defaultValue={this.state.street}
        onChangeText={(text) => this.setState({street:text})}/>


              <FormLabel>City</FormLabel>
        <FormInput onChangeText={(text) => this.setState({city:text})}/>


              <FormLabel>Postal Code</FormLabel>
        <FormInput defaultValue={this.state.postalCode}
        onChangeText={(text) => this.setState({postalCode:text})}/>




      </ScrollView>
        <View style={{padding:10, flexDirection: 'row', alignItems:'center', justifyContent: 'center'}}>
        <Button  title="Cancel" onPress={() => this.handleCancel()}/>
        <Button  title="Submit" onPress={() => this.handleSubmit()}/>
        </View>
  </PopupDialog>


</View>


    );
  }
}

const mapStateToProps = state => {
  console.log('------------------------')
  console.log(state.manageCart.items)
  console.log('------------------------')
  return {

    data: state.manageCart.items,
    count: state.manageCart.count,
  };
};

export default connect(mapStateToProps)(Cart);




const InfoText = ({ text }) => (
  <View
    style={{
      paddingTop: 12,
      paddingBottom: 12,
      backgroundColor: '#F4F5F4',
    }}>
    <Text
      style={{
        fontSize: 16,
        marginLeft: 20,
        color: '#000',
        fontWeight: '500',
      }}>
      {text}
    </Text>
  </View>
);




const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F5F4',
    // alignItems:'center',
    // justifyContent:'center',
    height:'45%'
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
