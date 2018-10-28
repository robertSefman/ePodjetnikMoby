<<<<<<< HEAD
import React from 'react'
import {Provider} from 'react-redux'
import { Icon, Button } from 'react-native-elements'
import {
  createSwitchNavigator, // da preklopim, ko se logiram
  createStackNavigator,
  createTabNavigator
} from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons';

import LoginScreen from './loginScreen'
import PartnerListScreen from './PartnerListScreen'
import PartnerSearchScreen from "./PartnerSearchScreen";
import PartnerMainDataScreen from "./PartnerMainDataScreen";
import PartnerRemarksScreen from "./PartnerRemarksScreen";
import PartnerContactPersonsScreen from "./PartnerContactPersonsScreen";
import HomeScreen from './HomeScreen'
import {store, persistor} from './store'

const PartnerTabs = createTabNavigator({
  PartnerMainData: {
    screen: PartnerMainDataScreen,
    navigationOptions: { headerTitle: 'Header title' }
  },
  PartnerContactPersons: PartnerContactPersonsScreen,
  PartnerRemarks: PartnerRemarksScreen,
}, {
    tabBarOptions: {
      activeTintColor: 'yellow',
      inactiveTintColor: 'white',
      titleStyle: {
       fontSize: 30,
       fontWeight: 'bold',
     },
    },
  })


const MainStack = createStackNavigator({
  Home: HomeScreen,
  PartnerSearch: PartnerSearchScreen,
  PartnerMainData: {
    screen: PartnerTabs,
    navigationOptions: { headerTitle: 'E-Podjetnik d.o.o.' }
  }
}, {
  initialRouteName: "Home",
  navigationOptions: {
    headerTintColor: "#0096F7",
    headerStyle: {
      backgroundColor: "#fff"
    }
  }
});



const AppNavigator = createSwitchNavigator({
  Login: LoginScreen,
  MainStack: MainStack,
}, {
    initialRouteName: "Login",
})

=======
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
>>>>>>> 7e782f57c8df4185d150e3d73ce8ad5fe98548f7

export default class App extends React.Component {
  render() {
    return (
<<<<<<< HEAD
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    )
  }
}
=======
      <View style={styles.container}>
        <Text>Open up App.js to start xx working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
>>>>>>> 7e782f57c8df4185d150e3d73ce8ad5fe98548f7
