import * as React from 'react';
import { View, Animated, TouchableOpacity, StyleSheet } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { Constants } from 'expo';

// const Dashboard = () => (
//   <View style={[styles.container, { backgroundColor: '#ff4081' }]} />
// );
// const Profile = () => (
//   <View style={[styles.container, { backgroundColor: '#673ab7' }]} />
// );

export class AddItem extends React.Component {
  render() {
    return <View style={[styles.container, { backgroundColor: '#613cb6' }]} />;
  }
}

export class Profile extends React.Component {
  render() {
    return <View style={[styles.container, { backgroundColor: '#000' }]} />;
  }
}

export class Dashboard extends React.Component {
  render() {
    return <View style={[styles.container, { backgroundColor: '#ff4081' }]} />;
  }
}

// const AddItem = () => (
//   <View style={[styles.container, { backgroundColor: '#613cb6' }]} />
// );


export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Dashboard' },
      { key: 'second', title: 'Profile' },
      { key: 'third', title: 'Add Item' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const color = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map(
              inputIndex => (inputIndex === i ? '#D6356C' : '#222')
            ),
          });
          return (
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() => this.setState({ index: i })}>
              <Animated.Text style={{ color }}>{route.title}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  _renderScene = SceneMap({
    first: Dashboard,
    second: Profile,
    third: AddItem
  });

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
});
