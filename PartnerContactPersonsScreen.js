import React, {Component} from 'react'
import {View, Text, StyleSheet, ActivityIndicator, TouchableOpacity, FlatList} from 'react-native'
import {Constants} from 'expo'
import {connect} from 'react-redux'

class PartnerContactPersonsScreen extends Component{

  static navigationOptions = {
    title: 'KOT.OSEBE',
  }

  state = {
    error : 'werssror',
    isLoading : true,
    counter : 0,
    data: []
  }

  fetchEpodjetnik(){
    
    return fetch( 'https://prod.e-podjetnik.com/api/V1/ReactCustomers?dataType=ContactPersons&partnerId=1', {
         method: "GET",
         headers: {
         "X-Api-Key": "ApiVizir99"
       },
     })
    .then(
      response => response.json() 
    )
    .then(
      result => {
        this.setState( {data: result.data} )
        console.log( result.data)
    })
    .catch((error) =>{
      console.error(error);
    })

  }

  fetchErrorHandler(error){
    console.error('tralxssssala');
    //this.changeIsLoading()
    console.error(error);
    this.setState({ isLoading: false, error })
  }

  componentDidMount(){
     this.fetchEpodjetnik()
   }

  render(){
    if(this.state.isLoading){
      return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => <Text>{item.name}</Text>}
          keyExtractor={({id}, index) => id}
        />
      </View>
      )
    }


    return(
      <View style={styles.container}>
        <Text style={styles.error}>{this.state.error}</Text>
        <Text>{this.state.counter}</Text>
      </View>
    )

  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  error : {
    color: 'red',
  },
 
})

const mapStateToProps = state => ({
})

export default connect(mapStateToProps)(PartnerContactPersonsScreen)
