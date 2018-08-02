import React, { Component } from 'react';
import { TouchableOpacity, Alert, Image, SectionList, Text, View, StyleSheet } from 'react-native';
import {  Avatar, Icon, ListItem } from 'react-native-elements';
import {
  MaterialIcons,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
  Feather,
  FontAwesome,
} from '@expo/vector-icons';


import {
  addToCart,
} from '../actions/actions'

import { connect } from 'react-redux'




// You can import from local files
// let data = [
//   {
//     category: 'Apetizer',
//     item_id: 'cheeseburger1',
//     name: 'Cheesburger',
//     image:
//       'https://daily.jstor.org/wp-content/uploads/2017/11/dim_sum_dumplings_1050x700.jpg',
//     price: '$$',
//     spicy: 'hot',
//     rest_id: 'mcdonalds1'
//   },
//   {
//     name: 'Shrimp Fried Rice',
//     image: 'https://s3-media2.fl.yelpcdn.com/bphoto/ynj5HBZ4MvYeNzeYBrQcJg/ls.jpg',
//     distance: '15-20km',
//     category: 'Italian',
//     rating: 3.5,
//     price: '$',
//     timing: '11am - 12pm',
//     spicy: 'medium',
//   },
//   {
//     name: 'Chicken Curry',
//     image: 'http://finedininglovers.cdn.crosscast-system.com/BlogPost/l_4620_StockFood-00400734.jpg',
//     distance: '15-20km',
//     category: 'Mexican',
//     rating: 3.5,
//     price: '$',
//     timing: '11am - 12pm',
//     spicy: 'mild',
//   },
//   {
//     name: 'Pork Dumplings',
//     image:
//       'https://www.gourmetfoodstore.com/images/gfs/topcat/right-french-cheese.jpg',
//     distance: '15-20km',
//     category: 'Chinese',
//     rating: 3.5,
//     price: '$$',
//     timing: '11am - 12pm',
//     spicy: 'hot',
//   },
  
  
//     {
//     name: 'Biryani',
//     image:
//       'https://img.aws.livestrongcdn.com/ls-article-image-673/ds-photo/getty/article/83/159/496069654.jpg',
//     distance: '15-20km',
//     category: 'Indian',
//     rating: 3.5,
//     price: '$$',
//     timing: '11am - 12pm',
//     spicy: 'hot',
//   },
//   {
//     name: 'Qorma',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Kielbasas.jpg/200px-Kielbasas.jpg',
//     distance: '15-20km',
//     category: 'Indian',
//     rating: 3.5,
//     price: '$',
//     timing: '11am - 12pm',
//     spicy: 'medium',
//   },
//   {
//     name: 'Pasta',
//     image: 'https://i.ytimg.com/vi/qgC9JY5y7Kc/maxresdefault.jpg',
//     distance: '15-20km',
//     category: 'Italian',
//     rating: 3.5,
//     price: '$',
//     timing: '11am - 12pm',
//     spicy: 'mild',
//   },
//   {
//     name: 'Bibima',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Kielbasas.jpg/200px-Kielbasas.jpg',
//     distance: '15-20km',
//     category: 'Korean',
//     rating: 3.5,
//     price: '$$',
//     timing: '11am - 12pm',
//     spicy: 'hot',
//   },
  
  
  
//       {
//     name: 'Pizza',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Kielbasas.jpg/200px-Kielbasas.jpg',
//     distance: '15-20km',
//     category: 'Italian',
//     rating: 3.5,
//     price: '$$',
//     timing: '11am - 12pm',
//     spicy: 'hot',
//   },
//   {
//     name: 'Butter Chicken',
//     image: 'https://daily.jstor.org/wp-content/uploads/2017/11/dim_sum_dumplings_1050x700.jpg',
//     distance: '15-20km',
//     category: 'Indian',
//     rating: 3.5,
//     price: '$',
//     timing: '11am - 12pm',
//     spicy: 'medium',
//   },
//   {
//     name: 'Roasted Duck',
//     image: 'https://i.ytimg.com/vi/qgC9JY5y7Kc/maxresdefault.jpg',
//     distance: '15-20km',
//     category: 'Italian',
//     rating: 3.5,
//     price: '$',
//     timing: '11am - 12pm',
//     spicy: 'mild',
//   },
//   {
//     name: 'Kimchi',
//     image:
//       'https://s3-media2.fl.yelpcdn.com/bphoto/ynj5HBZ4MvYeNzeYBrQcJg/ls.jpg',
//     distance: '15-20km',
//     category: 'Korean',
//     rating: 3.5,
//     price: '$$',
//     timing: '11am - 12pm',
//     spicy: 'hot',
//   },
// ];

// var processData = () => {
//   var dLength = data.length,
//     sLength,
//     secIDs = [],
//     dt = [],
//     i,
//     j;

//   for (i = 0; i < dLength; i++) {
//     if (!secIDs.includes(data[i].category)) {
//       secIDs.push(data[i].category);
//     }
//   }

//   sLength = secIDs.length;

//   for (i = 0; i < sLength; i++) {
//     var temp = { title: secIDs[i], data: [] };
//     for (j = 0; j < dLength; j++) {
//       if (data[j].category.toUpperCase() === secIDs[i].toUpperCase()) {
//         temp.data.push(data[j]);
//       }
//     }

//     dt.push(temp);
//   }

//   return { dt };
// };






// or any pure javascript modules available in npm
export class OrderScreen extends Component {
  

  handleAddToCart(obj) {
      this.props.dispatch(addToCart(obj))
    }



processData()  {
  data = this.props.route.data.menu
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




  render() {

    //     console.log('------------------------');
    // console.log(this.props);
    // console.log('------------------------');
    myData = this.processData().dt
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          // width: '100%',
          // backgroundColor: '#ecf0f0',
        }}>
        <SectionList
          style={{ width: '100%' }}
          renderItem={({ item, index, section }) => (
            <ListItem
              containerStyle={{
                backgroundColor:"#ecf0f1",
                height: 70,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              title={
                <View style={{marginLeft:10}}>
                <Text style={{fontSize:19,}}>{item.name}</Text>
                <View style={{ flexDirection: 'row', marginLeft:0}}>
                  <Text style={{ fontSize: 14 }}>${item.price}  | </Text>
                  <MaterialCommunityIcons
                    name={'chili-' + item.spicy}
                    color="red"
                    size={18}
                  />
                </View>
                </View>
              }
              titleStyle={{ backgroundColor:'#000' }}
              avatar={<Image
          style={{width: 75, height: 50}}
          source={{uri: item.image}}
        />}
              rightIcon={
                <TouchableOpacity 
                style={{width: 65, height:42, alignItems:'center',justifyContent:'center'}}
                onPress={()=>{this.handleAddToCart(item)}}
                >
                <FontAwesome
                  // style={{ alignSelf: 'center', paddingRight:13 }}
                  name="cart-arrow-down"
                  color="green"
                  size={30}
                  
                />
                </TouchableOpacity>
              }
            />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <InfoText text={title} />
          )}
          sections={myData}
          keyExtractor={(item, index) => item + index}
        />
      </View>
    );
  }
}


// const mapStateToProps = (state) => {
//   return {
    
//   }
// }

// upgrade our component to become Redux-aware
export default connect()(OrderScreen)


const InfoText = ({ text }) => (
  <View
    style={{
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: '#F4F5F4',
      width: '100%',
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
