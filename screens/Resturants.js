import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Row,
} from 'react-native';
import { WebBrowser } from 'expo';

import { Component } from 'react';
import { Animated } from 'react-native';

export default class Resturants extends React.Component {

  static navigationOptions = {
    header: null,
  };

  
  constructor() {
    super();

    this.state = { valueArray: [], disabled: false };

    this.index = 0;

    this.animatedValue = new Animated.Value(0);
  }

  addMore = () => {
    this.animatedValue.setValue(0);

    let newlyAddedValue = { index: this.index };

    this.setState(
      {
        disabled: true,
        valueArray: [...this.state.valueArray, newlyAddedValue],
      },
      () => {
        Animated.timing(this.animatedValue, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start(() => {
          this.index = this.index + 1;
          this.setState({ disabled: false });
        });
      }
    );
  };

  render() {
    const animationValue = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-59, 0],
    });

    let newArray = this.state.valueArray.map((item, key) => {
      if (key == this.index) {
        return (
          <Animated.View
            key={key}
            style={[
              styles.viewHolder,
              {
                opacity: this.animatedValue,
                transform: [{ translateY: animationValue }],
              },
            ]}>
            <Text style={styles.text}>Row {item.index}</Text>
          </Animated.View>
        );
      } else {
        return (
          <View key={key} style={styles.viewHolder}>
            <Text style={styles.text}>Row {item.index}</Text>
          </View>
        );
      }
    });

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{ flex: 1, padding: 4 }}>
            {newArray}
          </View>
        </ScrollView>

        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.btn}
          disabled={this.state.disabled}
          onPress={this.addMore}>
          <Image source={{uri: 'https://images.pexels.com/photos/89432/pexels-photo-89432.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb'}}
          style={styles.btnImage} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create(
{
    container:
    {
        flex: 1,
        backgroundColor: '#eee',
        justifyContent: 'center',
        paddingTop: (Platform.OS == 'ios') ? 20 : 0
    },

    viewHolder:
    {
        height: 55,
        backgroundColor: '#26A69A',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 4
    },

    text:
    {
        color: 'white',
        fontSize: 25
    },

    btn:
    {
        position: 'absolute',
        right: 25,
        bottom: 25,
        borderRadius: 30,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)',
        padding: 15
    },

    btnImage:
    {
        resizeMode: 'contain',
        width: '100%',
        tintColor: 'white'
    }
});