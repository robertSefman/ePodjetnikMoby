import React from 'react'
import {Button, View, StyleSheet} from 'react-native'

import PartnersSectionList from './PartnersSectionList'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {addPartner} from './actions'

class PartnerListScreen extends React.Component {
   static propTypes = {
     addPartner: PropTypes.func,
   }


  static navigationOptions = ({navigation}) => ({
    headerTitle: 'Partnerji',
    headerRight: (
      <Button title="Dodaj partnerja" onPress={() => navigation.navigate('AddPartner')} color="dodgerblue" />
    ),
  })

  state = {
    showPartners: true,
  }

 componentDidMount(){
//   this.addPartner({ name:'kr en kontakt', phone: '123'})
//   console.log('tuki')
   //console.log(this.props.partners)
   }

  add = () => {
    console.log('v ADD')

    
    fetch( 'https://prod.e-podjetnik.com/api/V1/ReactCustomers?dataFormat=1', {
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
        //this.setState( {data: result.data} )
        this.props.addPartner(result.data)
        console.log( result.data)
    })
    .catch((error) =>{
      console.error(error);
    })





    // this.props.addPartner( [
    //   {name:'Abanka', phone: '123'},
    //   {name:'BBanka', phone: '345'},
    //   {name:'EPodjetnik', phone: '345'},
    //   {name:'Ekran', phone: '345'},
    // ])
  }


  togglePartners = () => {

  //   _login = async () => {
  //      this.props.logInUser(
  //     this.state.username,
  //     this.state.password
  //   )
  // }

    this.add()
    
    
    this.setState(prevState => ({showPartners: !prevState.showPartners}))
  }

  handleSelectPartner = partner => {
    console.log(this.props.navigation)
    // this.props.navigation.push('PartnerDetails', partner) // PartnerDetails definiran v Api.js - MainStack
  }

  render() {
	return (
      <View style={styles.container}>
        <Button title="Prikaži / skrij seznam" onPress={this.togglePartners} />
        {this.state.showPartners && (
		      <PartnersSectionList
            partners={this.props.partners}
            onSelectPartner={this.handleSelectPartner}
          />
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:30
  },
})

const mapStateToProps = state => ({
	partners: state.partners,
})
export default connect(mapStateToProps, {addPartner})(PartnerListScreen)
// dodatno addPartner, da ga lahko uporabim v this.props....

