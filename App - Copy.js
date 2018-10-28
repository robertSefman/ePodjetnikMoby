import React from 'react'
//import {Provider} from 'react-redux'
import {
  createSwitchNavigator, // da preklopim, ko se logiram
  createStackNavigator
} from 'react-navigation'

//import LoginScreen from './loginScreen'
//import PartnerListScreen from './PartnerListScreen'
//import PartnerDetailsScreen from "./PartnerDetailsScreen";
//import HomeScreen from './HomeScreen'
//import {store, persistor} from './store'
//import Ionicons from "react-native-vector-icons/Ionicons";


class LoginScreen extends React.Component{
  static navigationOptions = {
    headerTitle : 'LOGIN Screen'
  }
  render(){
    return(
      <View style={styles.container2}>
      <Button title='Login to go to Home Screen' 
        onPress = {()=>this.props.navigation.navigate('Home')}
      />
      </View>
    )
  }
}

function randomNumber(){
  return Math.floor(Math.random()*10)
}

class Screen2 extends React.Component{
  static navigationOptions = {
    headerTitle : 'Screen 2'
  }
  render(){
    return(
      <View style={styles.container2}>
       <Text>THIS IS SCREEN TWO</Text>
      <Button  style={styles.button2} title='Press to go to screen 3' 
        onPress = {()=>this.props.navigation.navigate(
          'Screen3',
          {
            number: randomNumber(), 
          }
        )}
      />
      </View> 
    )
  }
}

class Screen3 extends React.Component{
  static navigationOptions = {
    headerTitle : 'Screen 3'
  }
  render(){
    return(
      <View style={styles.container1}>
      // Parameter, ki ga definiram v Screen2 kot 2. parameter, prvi je route, drugo je parameter, ki ga pošljem 
      <Text>Param - random number: {this.props.navigation.getParam('number')}</Text>
      <Text>THIS IS SCREEN THREE</Text>
      <Button style={styles.button2} title='Press to go BACK' 
        onPress = {()=>this.props.navigation.goBack()}
      />
      </View>
    )
  }
}

class HomeScreen extends React.Component{
  static navigationOptions = {
    headerTitle : 'Home screen'
  }
  render(){
    return(
      <View style={styles.container1}>
      <Text>THIS IS HOME SCREEN</Text>
      <Button style={styles.button2} title='Press to go to screen 2' 
        onPress = {()=>this.props.navigation.navigate('Screen2')}
      />
      </View>
    )
  }
}



// const MainStack = createStackNavigator({
//     Home: HomeScreen,
//     PartnerDetails: PartnerDetailsScreen,
//   }, {
//     //initialRouteName: "HomeScreen",
//     navigationOptions: {
//       headerTintColor: "#a41034",
//       headerStyle: {
//         backgroundColor: "#fff"
//       }
//     }
//   }
// );

// MainStack.navigationOptions = {
//   tabBarIcon: ({ focused, tintColor }) => (
//     <Ionicons
//       name={`ios-contacts${focused ? "" : "-outline"}`}
//       size={25}
//       color={tintColor}
//     />
//   )
// };

const MainStack = createStackNavigator({
  Home: HomeScreen,
  Login: LoginScreen,
  Screen2: Screen2,
  Screen3: Screen3,
},{
  initialRouteName: 'Home'
})

const AppNavigator = createSwitchNavigator({
  //Login: LoginScreen,
  MainStack: MainStack,
})

export default class App extends React.Component {
  // state = {
  //   partners : [{name:"default partner",phone:"!!!!!"}]
  // }

  render() {
    return (
      //<Provider store={store}>
    
        <AppNavigator />
     // </Provider>
    )
  }
}