import React, {Component} from 'react'
import {View, Text, StyleSheet, ActivityIndicator, TouchableOpacity, FlatList, TextInput, Button} from 'react-native'
import {Constants} from 'expo'
import {connect} from 'react-redux'
import RowPartnerRemark from './RowPartnerRemark'

class PartnerRemarksScreen extends Component{
   static navigationOptions = {
     title: 'OPOMBE',
   }


  state = {
    error : 'werssror',
    isLoading : true,
    counter : 0,
    data: []
  }

  fetchEpodjetnik(){
    
    return fetch( 'https://prod.e-podjetnik.com/api/V1/ReactCustomers?dataType=Remarks&partnerId=1', {
         method: "GET",
         headers: {
         "X-Api-Key": "7fcb3060-6017-4b23-84d3-4d75faaa40b2"
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

handleSelectItem = item => {
    
    console.log('handleSelectItem-item:')
    console.log(item)
    console.log('handleSelectItem-item.route:')
    console.log('handleSelectItem: END')

    //this.props.navigation.navigate('PartnerSearch', item)
  }

  render(){
    if(this.state.isLoading){
      return(

      <View style={{flex: 1, paddingTop:20}}>
        <TextInput
        multiline
        style={{height: 100, borderColor: 'gray', borderWidth: 1,
        marginLeft:10, marginRight:10
        }}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        />
        <TouchableOpacity style={styles.submitButtonBackground}>
          <Button title= 'Shrani' />
        </TouchableOpacity>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => 
            <RowPartnerRemark
              item={item}
              onSelectItem={this.handleSelectItem} 
            />
          }
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
  submitButtonBackground: {
    marginTop:5,
    marginRight:10,
    alignSelf: 'flex-end',
    width: '25%',
    marginBottom: 10,
  }, 
 
})

const mapStateToProps = state => ({
})

export default connect(mapStateToProps)(PartnerRemarksScreen)
