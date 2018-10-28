import React from 'react'
import {Button, View, StyleSheet, Text, TextInput, FlatList} from 'react-native'
import {connect} from 'react-redux'
import RowHomePage from './RowHomePage'

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  // static navigationOptions = {
  //   headerTitle : 'Domov',
  //   headerTintColor: "white",
  //   headerStyle: {
  //     backgroundColor: "#0096F7"
  //   },
  //   headerTitleStyle: {
  //     fontWeight: 'bold',
  //   },
  // }

  handleSelectItem = item => {
    
    console.log('handleSelectItem-item:')
    console.log(item)
    console.log('handleSelectItem-item.route:')
    console.log(item.route)
    console.log('handleSelectItem: END')

    this.props.navigation.navigate('PartnerSearch', item)
  }

  render() {
    const buttons = [
      {id:'1', name : 'PARTNERJI', route: 'PartnerSearch'},
      {id:'2', name : 'POS BLAGAJNA', route: 'PartnerSearch'},
      {id:'3', name : 'POROČILO O POSLOVANJU', route: 'PartnerSearch'},
    ]
    return (
       <View style={styles.container}>
       <FlatList
          data={buttons}
          renderItem={({item}) => <RowHomePage 
              item={item}
              onSelectItem={this.handleSelectItem} 
            />
          }
          keyExtractor={({id}, index) => id}
        />
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginLeft: 10, 
    marginRight: 10, 
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});

const mapStateToProps = state => ({
  err: state.user.loginErr,
  token: state.user.token,
})

export default connect(mapStateToProps)(HomeScreen)