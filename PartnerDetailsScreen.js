import React from 'react'
import {Button, Text, TextInput, View, StyleSheet} from 'react-native'
import { Constants } from 'expo'
import {connect} from 'react-redux'

class PartnerDetailsScreen extends React.Component {

  static navigationOptions = {
    //headerTitle : {props.navigation.getParam('item').name},

    headerTitle: 'PARTNER',
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#0096F7"
    }
  }



  render() {
    const partner = this.props.navigation.getParam('item')

    return (
      <View style={styles.container}>
        <Text style={styles.label}>ID:</Text>
        <TextInput value={partner.id} />
        <Text style={styles.label}>Naziv:</Text>
        <TextInput value={partner.name} />
        <Text style={styles.label}>Ulica:</Text>
        <TextInput />
        <Text style={styles.label}>Pošta:</Text>
        <TextInput />
        <Text style={styles.label}>Kraj:</Text>
        <TextInput />
        <Text style={styles.label}>Matična št.:</Text>
        <TextInput />
        <Text style={styles.label}>Davčna št.:</Text>
        <TextInput />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    marginLeft: 10,
    marginRight: 10,
  },
  label:{
    color: "#0096F7",
    fontWeight: 'bold',
  },
})

const mapStateToProps = state => ({
})

export default connect(mapStateToProps)(PartnerDetailsScreen)
