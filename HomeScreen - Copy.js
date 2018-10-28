import React from 'react'
import {Button, View, StyleSheet, Text, TextInput, FlatList} from 'react-native'
import {connect} from 'react-redux'
import RowVisitedPartner from './RowVisitedPartner'

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle : 'Domov',
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#0096F7"
    },
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }

  handleSelectPartner = partner => {
    this.props.navigation.navigate('PartnerDetails', partner)
  }

  render() {
    const visitedPartners = [
      {id: '1', name : 'ePodjetnik d.o.o.', noOfComments: 0},
      {id:'2', name : 'PRO-KONTO d.o.o.', noOfComments: 20},
      {id:'3', name : 'Vizir d.o.o.', noOfComments: 3},
    ]
    return (
       <View style={styles.container}>
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