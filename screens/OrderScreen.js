import React, { Component } from 'react';
import { ListItem, SectionList, Text, View, StyleSheet } from 'react-native';


// You can import from local files
let data = [
  {
    name: 'McDonalds',
    category: 'Mexican',
  },
  {
    name: 'KFC',
    category: 'Italian',
  },
  {
    name: 'HalalGuys',
    category: 'Mexican',
  },
  {
    name: 'MuchoBurrito',
    category: 'Italian',
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
    var temp = {title:secIDs[i], data:[]};
    for (j = 0; j < dLength; j++) {
      if(data[j].category.toUpperCase() === secIDs[i].toUpperCase()) {
        temp.data.push(data[j]);
      }
    }
    
    dt.push(temp);
}

  return {dt};
};



console.log(processData().dt);

// console.log(dd.secIDs);
// or any pure javascript modules available in npm
import { Icon, Card } from 'react-native-elements'; // Version can be specified in package.json

export default class OrderScreen extends Component {
  render() {
    return (
      <View style={{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 44,
    // width: '100%',
    // backgroundColor: '#ecf0f0',
  }}>
        <SectionList style={{backgroundColor:'#000', width: '100%'}}
          renderItem={({ item, index, section }) => (
            <View style={{backgroundColor:'pink'}}>  <Text key={index}>{item.name}</Text> </View>
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
