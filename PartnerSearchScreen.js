import React from 'react'
import {Button, View, StyleSheet, Text, TextInput, FlatList, TouchableOpacity} from 'react-native'
import { Constants } from 'expo';
import {connect} from 'react-redux'
import RowVisitedPartner from './RowVisitedPartner'
import PartnerMainDataScreen from './PartnerMainDataScreen.js'
class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle : 'Izbira partnerja',
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#0096F7"
    },
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }

  handleSelectPartner = partner => {
    this.props.navigation.navigate('PartnerMainData', partner)
  }

  render() {
    const visitedPartners = [
      {id: '1', name : 'ePodjetnik d.o.o.', noOfComments: 0},
      {id:'2', name : 'PRO-KONTO d.o.o.', noOfComments: 20},
      {id:'3', name : 'Vizir d.o.o.', noOfComments: 3},
    ]
    return (
        <View style={styles.container}>
          <Text style={styles.searchText}>Naziv, ulica ali davčna številka:</Text>
          <TextInput style={styles.searchInput} />
          <TouchableOpacity style={styles.searchButtonBackground}>
            <Button style={styles.xbutton} title= 'Išči' />
          </TouchableOpacity>
          <FlatList
            data={visitedPartners}
            renderItem={({item}) => <RowVisitedPartner 
              item={item}
              onSelectPartner={this.handleSelectPartner} 
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
    paddingTop: Constants.statusBarHeight,
    marginLeft: 10, 
    marginRight: 10, 
    flex: 1,
    //flexDirection: 'row',
    justifyContent: 'space-between'
  },
  searchText: {
    fontSize: 20,
    color: "#0096F7",
  },
  searchInput: {
    fontSize: 16,
    paddingBottom: 3,

  },
  searchButtonBackground: {
    alignSelf: 'flex-end',
    width: '25%',
    marginBottom: 40,

  }
});

const mapStateToProps = state => ({
  err: state.user.loginErr,
  token: state.user.token,
})

export default connect(mapStateToProps)(HomeScreen)