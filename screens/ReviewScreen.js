import React, { Component } from 'react';
import { Button, ListView, TextInput, Alert, Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

import ActionButton from 'react-native-action-button';
import PopupDialog, { DialogTitle } from 'react-native-popup-dialog';
import {
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
  Feather,
} from '@expo/vector-icons';

// or any pure javascript modules available in npm
import {Icon, Rating, Divider, Avatar, Card, ListItem } from 'react-native-elements'; // Version can be specified in package.json


import StarRating from 'react-native-star-rating';


export default class App extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.state = {
      starCount: 3.5,
      ratings: 3,
      loading: true,
      dataSource: ds.cloneWithRows([
        {name: 'Emily Washington', 
          rating: 3.4, 
          comment:"Thimend it to everyone",
          avatar:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        },
        {name: 'Emily Washington', 
          rating: 3.4, 
          comment:"This restaurant has the best food ever...I recommend it to everyone",
          avatar:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        },
        {name: 'Emily Washington', 
          rating: 3.4, 
          comment:"BAD FOOD....Very bad food. Don't go to this restaurant ever again!!!. this has been the worst experience of my life so far...! cnat beleive it. Cant releive it isanf kalisjd gfasdeglrkj  fliwws",
          avatar:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        },
        {name: 'Emily Washington', 
          rating: 3.4, 
          comment:"This restaurant has the best food ever...I recommend it to everyone",
          avatar:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        },
        {name: 'Emily Washington', 
          rating: 3.4, 
          comment:"This restaurant has the best food ever...I recommend it to everyone",
          avatar:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        },
        {name: 'Emily Washington', 
          rating: 3.4, 
          comment:"This restaurant has the best food ever...I recommend it to everyone",
          avatar:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        },
      ]),
    };
    this.ratingCompleted = this.ratingCompleted.bind(this);
  }

async componentWillMount() {
await Expo.Font.loadAsync({
'Ionicons': require("@expo/vector-icons/fonts/Ionicons.ttf")
});
this.setState({ loading: false });
}
  ratingCompleted(rating) {
    this.setState({ ratings: rating });
  }

  render() {
  	    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      <View style={styles.container}>

        <ListView
        renderHeader={()=>
        <View style={{alignItems:'center', justifyContent: 'center'}}>
        <StarRating
        disabled={true}
        emptyStar={'md-star-outline'}
        fullStar={'md-star'}
        halfStar={'md-star-half'}
        iconSet={'Ionicons'}
        maxStars={5}
        rating={this.state.ratings}
        selectedStar={(rating) => this.ratingCompleted(rating)}
        fullStarColor={'red'}
        starSize={60}
        containerStyle={{justifyContent: 'center'}}/>
        <Text style={{lineHeight:32, fontSize:20,}}>Rating: <Text style={{ color:'red', fontSize:30,}}>{this.state.ratings}</Text>/5</Text>
          </View>
        }
        
        style={{backgroundColor:'#fff', width:'95%',}}
          dataSource={this.state.dataSource}
          renderRow={rowData => (
            <Card
              // image={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
              containerStyle={styles.listItemContainer}
              // roundAvatar
            >
            <View style={{
                  alignItems: 'center',
                  // backgroundColor: '#fff',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
              <View
                style={{
                  alignItems: 'center',
                  // backgroundColor: '#fff',
                  flexDirection: 'row',
                }}>
                <Avatar
                  size="small"
                  rounded
                  title="soiamfkjas "
                  titleStyle={{ backgroundColor: '#000' }}
                  source={{
                    uri:
                      rowData.avatar,
                  }}
                  onPress={() => console.log('Works!')}
                  activeOpacity={0.7}
                />
                <Text style={{ paddingLeft: 13 }}> {rowData.name}</Text>
                </View>
                
                <View style={{alignItems: 'center',}}>
                <Text style={styles.category}>
                  <Feather
                    style={{ padding: 1, alignSelf: 'center' }}
                    name="star"
                    color="#d7e035"
                    size={20}
                  />
                  {rowData.rating}
                </Text>
              </View>
              
              </View>
              
              <Divider style={{ backgroundColor: '#c1c1c1', marginTop: 10 }} />
              <Text style={{ marginTop: 10, marginBottom: 10 }}>
                {rowData.comment}
              </Text>
            </Card>
          )}
        />
        


        <PopupDialog
        containerStyle={{paddingBottom:'50%'}}
        height={254}
        dialogTitle={<DialogTitle title="How was your experience?" titleTextStyle={{alignSelf:'center',fontSize:23,fontWeight:'bold'}} />}
    ref={(popupDialog) => { this.popupDialog = popupDialog; }}
  >

    <View style={{}}>
    <StarRating
        disabled={false}
        emptyStar={'md-star-outline'}
        fullStar={'md-star'}
        halfStar={'md-star-half'}
        iconSet={'Ionicons'}
        maxStars={5}
        rating={this.state.ratings}
        selectedStar={(rating) => this.ratingCompleted(rating)}
        fullStarColor={'red'}
        starSize={60}
        containerStyle={{justifyContent: 'center'}}/>

      <TextInput 
      ref={input => { this.textInput = input }} 
      style={{margin: 5,
      height: 60,
      borderColor: '#000',
      borderWidth: 1}}
      multiline={true}
      underlineColorAndroid="#fff"
      placeholder="Say something nice..."/>
      <Button 
              onPress={() => {
      this.popupDialog.dismiss();
      this.textInput.clear();
    }}

      title='Submit'/>
    </View>

  </PopupDialog>



                <ActionButton 
        buttonColor="rgba(231,76,60,1)"
        size={43}
        
        onPress={() => {
      this.popupDialog.show();
    }}

        renderIcon={() => <Feather
                    style={{ padding: 1, alignSelf: 'center' }}
                    name="plus"
                    color="#fff"
                    size={26}
                  />}
        // buttonText="order"
        // buttonTextStyle={{fontSize:13}}

        />
      </View>
    );
  }
}



// const styles = StyleSheet.create({
// 	container: {
// 		backgroundColor: "#FF00FF",
// 		width: 100,
// 		height: 50
// 	}
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 5,
    backgroundColor: '#fff',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  listItemContainer: {
    // height: 155,
    // width: 300,
    borderWidth: 0.5,
    borderColor: '#ECECEC',
    backgroundColor: '#ecf0f1',
    width: '95%',
    alignSelf: 'center',
  },
    actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
