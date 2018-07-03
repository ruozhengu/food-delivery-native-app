import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  View,
} from 'react-native';

import {
  MaterialIcons,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
  Feather,
} from '@expo/vector-icons';
import { Badge, Icon, Avatar } from 'react-native-material-ui';

import { addToCart, removeFromCart } from '../actions/actions';

import { connect } from 'react-redux';

var badge = '3';

// console.log(store.getState())

export class Cart extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      tabBarLabel: 'Orders',
      tabBarIcon: () => (
        <Badge text={badge}>
          <MaterialCommunityIcons name="cart" size={25} />
        </Badge>
      ),
    };
  };

  render() {
    return (
      <View
        style={{
          paddingTop: 33,
          flex: 1,
          alignSelf: 'stretch',
          backgroundColor: '#000',
        }}>
        <Button
          onPress={() =>
            this.props.navigation.setParams({
              count: this.props.count.toString(),
            })
          }
          color="#FFF"
          title="Choose Color"
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  badge = state.manageCart.count.toString();
  return {
    data: state.manageCart.items,
    count: state.manageCart.count,
  };
};

export default connect(mapStateToProps)(Cart);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
