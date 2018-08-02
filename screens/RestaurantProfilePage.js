import * as React from 'react';
import { ScrollView, KeyboardAvoidingView, Picker, Text, View, Animated, Keyboard, TouchableOpacity, StyleSheet } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { Constants } from 'expo';
import { connect } from 'react-redux';
import { Alert, TextInput, Button, } from 'react-native';


import Amplify, { API } from 'aws-amplify';
import aws_exports from '../aws-exports';
Amplify.configure(aws_exports);

// const Dashboard = () => (
//   <View style={[styles.container, { backgroundColor: '#ff4081' }]} />
// );
// const Profile = () => (
//   <View style={[styles.container, { backgroundColor: '#673ab7' }]} />
// );

export class AddItem extends React.Component {


   state = {
    name: '',
    category: '',
    price: '',
    spicy_level: 'medium',
    url: 'http://www.barpbb.com/media/k2/items/cache/760af276ee6f9b46d3f3a54c804b7c7d_XL.jpg',
  }

  onChangeText(key, value) {
    this.setState({
      [key]: value
    })
  }
  


  async saveItem(data) {
    console.log('save Item called')
    let newItem = {
      body: data
    }
    const path = "/RestaurantProfileTable";

    // Use the API module to save the note to the database
    console.log('reached try block')
    try {
      console.log('try start')
      const apiResponse = await API.put("RestaurantProfileTableCRUD", path, newItem)
      console.log('apiResponse called')
      console.log(apiResponse);
      this.setState({apiResponse});
    } catch (e) {
      console.log(e);
    }
  }





  handleSubmit() {
    // console.log(this.props.route.data.rest_id);
    if (this.state.name === '') {
      Alert.alert('name cannot be empty')
    } else {

    let itemNo = this.props.route.data.menu.length;
    let newItem = {
       "name": this.state.name,
       "category": this.state.category,
       "price": this.state.price,
       "spicy": this.state.spicy_level,
       "rest_id": this.props.route.data.rest_id,
       "item_id": this.state.name + '_' + this.props.route.data.rest_id + itemNo,
       "image": this.state.url,
    };

    this.props.route.data.menu[itemNo] = newItem;
    // console.log(this.props.route.data);
    // console.log(this.props.route.data.reviews.length);
    this.setState({name: '', category: '', price: '', spicy_level: 'medium', url: 'http://www.barpbb.com/media/k2/items/cache/760af276ee6f9b46d3f3a54c804b7c7d_XL.jpg',});
    Keyboard.dismiss();
    this.saveItem(this.props.route.data);
    Alert.alert('Your Item has been added and will appear shortly');
  }
}




  render() {
    return (//<View style={[styles.container, { backgroundColor: '#613cb6' }]} />;

          <KeyboardAvoidingView 
          style={{flex: 1, backgroundColor: '#fff', justifyContent: 'center', paddingVertical: 30}} 
          behavior="padding" enabled>
      <ScrollView>
      <Text style={{fontSize:25, fontWeight:'bold',alignSelf:'center'}}>Add Menu Item Form</Text>
        <TextInput
          onChangeText={value => this.onChangeText('name', value)}
          style={styles.input}
          placeholder='Name'
          underlineColorAndroid='#fff'
          value = {this.state.name}
        />
        <TextInput
          onChangeText={value => this.onChangeText('category', value)}
          style={styles.input}
          placeholder='Category'
          underlineColorAndroid='#fff'
          value = {this.state.category}
        />
                <TextInput
          onChangeText={value => this.onChangeText('price', value)}
          style={styles.input}
          placeholder='Price'
          keyboardType={'numeric'}
          underlineColorAndroid='#fff'
          value = {this.state.price}
        />
          
          <Text style={{paddingLeft:15,}}>Spicy Level</Text>
          <Picker
            style={{ width: 400, height: 80, justifyContent: 'center', overflow: 'hidden' }}
            selectedValue={this.state.spicy_level}
            onValueChange={(itemValue, itemIndex) => this.setState({ spicy_level: itemValue })}>
            <Picker.Item label="mild" value="mild" />
            <Picker.Item label="medium" value="medium" />
            <Picker.Item label="hot" value="hot" />
          </Picker>

                <TextInput
          onChangeText={value => this.onChangeText('url', value)}
          style={styles.input}
          secureTextEntry={true}
          placeholder='website'
          underlineColorAndroid='#fff'
          value = {this.state.url}
        />




        <Button title="Submit" onPress={() => this.handleSubmit()} />


      </ScrollView>
      </KeyboardAvoidingView>


  );}
}

export class Profile extends React.Component {
  render() {
    return <View style={[styles.container, { backgroundColor: '#000' }]} />;
  }
}

export class Dashboard extends React.Component {
  

  render() {
    console.log(this.props)
  return (
  <View style={styles.container}>
  <InfoText text="Daily Info" />
  <View style= {{padding:10}}>
   <Text style={{padding:5}}>Current Order Amount: {this.props.route.data.curr_holding_count}</Text>
  <Text style={{padding:5}}>Monthly Order Count: {this.props.route.data.mtl_order_count}</Text>
  <Text style={{padding:5}}>Monthly Revenue: ${this.props.route.data.mtl_revenue}</Text>
  </View>
  <InfoText text="Orders" />
  </View>
);
}
}


// const AddItem = () => (
//   <View style={[styles.container, { backgroundColor: '#613cb6' }]} />
// );


export class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Dashboard', data:this.props.restaurant },
      { key: 'second', title: 'Profile', data:this.props.restaurant },
      { key: 'third', title: 'Add Item', data:this.props.restaurant },
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

    renderTabBar=props =>
  <TabBar style={{marginTop:22}}
    {...props}
    indicatorStyle={{ backgroundColor: '#fff' }}
    tabStyle={{backgroundColor: "#000", height:45}}
  />


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
        renderTabBar={this.renderTabBar}
        onIndexChange={this._handleIndexChange}
      />
    );
  }
}


const mapStateToProps = state => {
      console.log('####################################')
      console.log(state)
      console.log('####################################')
  return {

      restaurant: state.manageCart.restaurant,
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
    input: {
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: '#2196F3',
    margin: 10,
    marginTop: 1
  },
});
