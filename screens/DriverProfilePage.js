import * as React from 'react';
import { Text, View, Animated, TouchableOpacity, StyleSheet } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Constants } from 'expo';
import { connect } from 'react-redux';

export class Dashboard extends React.Component {
  

  render() {
    console.log(this.props)
  return (
  <View style={styles.container}>
  <InfoText text="Daily Info" />
  <View style= {{padding:10}}>
  <Text style={{padding:5}}>Current Order Amount: {this.props.route.data.curr_holding_count}</Text>
  <Text style={{padding:5}}>Daily Completed: {this.props.route.data.dly_completed_count}</Text>
  <Text style={{padding:5}}>Daily Earning: ${this.props.route.data.dly_earning}</Text>
  <Text style={{padding:5}}>Monthly Completed: {this.props.route.data.mtl_completed_count}</Text>
  <Text style={{padding:5}}>Monthly Earning: ${this.props.route.data.mtl_earning}</Text>
  </View>
  <InfoText text="Orders" />
  </View>
);
}
}

const Profile = () => (
  <View style={[styles.container, { backgroundColor: '#673ab7' }]} />
);



export class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'dash', title: 'Dashboard', data:this.props.driver},
      { key: 'prof', title: 'Profile', data:this.props.driver },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
// console.log('****************************')
// console.log('in the driver profile page')
// console.log('****************************')
// console.log(this.props)
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

    renderTabBar=props =>
  <TabBar style={{marginTop:22}}
    {...props}
    indicatorStyle={{ backgroundColor: '#fff' }}
    tabStyle={{backgroundColor: "#000", height:45}}
  />


  _renderScene = SceneMap({
    dash: Dashboard,
    prof: Profile,
  });

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this.renderTabBar}
        onIndexChange={this._handleIndexChange}
      />
    );
  }
}

const mapStateToProps = state => {
  // console.log('------------------------')
  // console.log(state.manageCart.driver)
  // console.log('------------------------')
  return {

      driver: state.manageCart.driver,
    // count: state.manageCart.count,
  };
};

export default connect(mapStateToProps)(TabViewExample);




const InfoText = ({ text }) => (
  <View
    style={{
      paddingTop: 20,
      paddingBottom: 12,
      backgroundColor: '#F4F5F4',
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
