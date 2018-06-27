import React, { Component } from 'react';
import { Image, SectionList, Text, View, StyleSheet } from 'react-native';
import { Avatar, Icon, ListItem } from 'react-native-elements';
import {
  MaterialIcons,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
  Feather,
  FontAwesome,
} from '@expo/vector-icons';

// You can import from local files
let data = [
  {
    name: 'Cheesburger',
    image:
      'https://images.pexels.com/photos/89432/pexels-photo-89432.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb',
    distance: '15-20km',
    category: 'Mexican',
    rating: 3.5,
    price: '$$',
    timing: '11am - 12pm',
    spicy: 'hot',
  },
  {
    name: 'Shrimp Fried Rice',
    image: 'https://placeimg.com/640/480/tech',
    distance: '15-20km',
    category: 'Italian',
    rating: 3.5,
    price: '$',
    timing: '11am - 12pm',
    spicy: 'medium',
  },
  {
    name: 'Chicken Curry',
    image: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    distance: '15-20km',
    category: 'Mexican',
    rating: 3.5,
    price: '$',
    timing: '11am - 12pm',
    spicy: 'mild',
  },
  {
    name: 'Pork Dumplings',
    image:
      'https://images.pexels.com/photos/89432/pexels-photo-89432.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb',
    distance: '15-20km',
    category: 'Chinese',
    rating: 3.5,
    price: '$$',
    timing: '11am - 12pm',
    spicy: 'hot',
  },
  
  
    {
    name: 'Biryani',
    image:
      'https://images.pexels.com/photos/89432/pexels-photo-89432.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb',
    distance: '15-20km',
    category: 'Indian',
    rating: 3.5,
    price: '$$',
    timing: '11am - 12pm',
    spicy: 'hot',
  },
  {
    name: 'Qorma',
    image: 'https://placeimg.com/640/480/tech',
    distance: '15-20km',
    category: 'Indian',
    rating: 3.5,
    price: '$',
    timing: '11am - 12pm',
    spicy: 'medium',
  },
  {
    name: 'Pasta',
    image: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    distance: '15-20km',
    category: 'Italian',
    rating: 3.5,
    price: '$',
    timing: '11am - 12pm',
    spicy: 'mild',
  },
  {
    name: 'Bibima',
    image:
      'https://images.pexels.com/photos/89432/pexels-photo-89432.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb',
    distance: '15-20km',
    category: 'Korean',
    rating: 3.5,
    price: '$$',
    timing: '11am - 12pm',
    spicy: 'hot',
  },
  
  
  
      {
    name: 'Pizza',
    image:
      'https://images.pexels.com/photos/89432/pexels-photo-89432.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb',
    distance: '15-20km',
    category: 'Italian',
    rating: 3.5,
    price: '$$',
    timing: '11am - 12pm',
    spicy: 'hot',
  },
  {
    name: 'Butter Chicken',
    image: 'https://placeimg.com/640/480/tech',
    distance: '15-20km',
    category: 'Indian',
    rating: 3.5,
    price: '$',
    timing: '11am - 12pm',
    spicy: 'medium',
  },
  {
    name: 'Roasted Duck',
    image: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    distance: '15-20km',
    category: 'Italian',
    rating: 3.5,
    price: '$',
    timing: '11am - 12pm',
    spicy: 'mild',
  },
  {
    name: 'Kimchi',
    image:
      'https://images.pexels.com/photos/89432/pexels-photo-89432.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb',
    distance: '15-20km',
    category: 'Korean',
    rating: 3.5,
    price: '$$',
    timing: '11am - 12pm',
    spicy: 'hot',
  },
];

var processData = () => {
  var dLength = data.length,
    sLength,
    secIDs = [],
    dt = [],
    i,
    j;

  for (i = 0; i < dLength; i++) {
    if (!secIDs.includes(data[i].category)) {
      secIDs.push(data[i].category);
    }
  }

  sLength = secIDs.length;

  for (i = 0; i < sLength; i++) {
    var temp = { title: secIDs[i], data: [] };
    for (j = 0; j < dLength; j++) {
      if (data[j].category.toUpperCase() === secIDs[i].toUpperCase()) {
        temp.data.push(data[j]);
      }
    }

    dt.push(temp);
  }

  return { dt };
};

console.log(processData().dt);

// console.log(dd.secIDs);
// or any pure javascript modules available in npm
export default class OrderScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 44,
          // width: '100%',
          // backgroundColor: '#ecf0f0',
        }}>
        <SectionList
          style={{ width: '100%' }}
          renderItem={({ item, index, section }) => (
            <ListItem
              containerStyle={{
                height: 72,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              title={
                <View style={{marginLeft:10}}>
                <Text style={{fontSize:20, title: 'lucida grande'}}>{item.name}</Text>
                <View style={{ flexDirection: 'row', marginLeft:0}}>
                  <Text style={{ fontSize: 15 }}>$15  | </Text>
                  <MaterialCommunityIcons
                    name={'chili-' + item.spicy}
                    color="red"
                    size={19}
                  />
                </View>
                </View>
              }
              titleStyle={{ backgroundColor:'#000' }}
              avatar={<Image
          style={{width: 80, height: 55}}
          source={{uri: item.image}}
        />}
              rightIcon={
                <FontAwesome
                  style={{ alignSelf: 'center', padding:8 }}
                  name="cart-arrow-down"
                  color="#a09f9f"
                  size={35}
                />
              }
            />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <InfoText text={title} />
          )}
          sections={processData().dt}
          keyExtractor={(item, index) => item + index}
        />
      </View>
    );
  }
}

const InfoText = ({ text }) => (
  <View
    style={{
      paddingTop: 20,
      paddingBottom: 12,
      backgroundColor: '#F4F5F4',
      width: '100%',
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 44,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
