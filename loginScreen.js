import React from 'react'
import {Button, View, StyleSheet, Text, TextInput} from 'react-native'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {logInUser} from './actions'

class LoginScreen extends React.Component {
  static propTypes = {
    err: PropTypes.string,
    token: PropTypes.string,
    logInUser: PropTypes.func,
  }

  state = {
    username: '',
    password: '',
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.token) {
      this.props.navigation.navigate('Home')    
    }
  }

  _login = async () => {
    this.props.logInUser(
      this.state.username,
      this.state.password
    )
  }

  handleUsernameUpdate = username => {
    this.setState({username})
  }

  handlePasswordUpdate = password => {
    this.setState({password})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>{this.props.err}</Text>
        <Text style={styles.text}>Uporabniško ime</Text>
        <TextInput style={styles.textInput}
          value={this.state.username}
          onChangeText={this.handleUsernameUpdate}
          autoCapitalize="none"
        />
        <Text style={styles.text}>Geslo</Text>


        <TextInput style={styles.textInput}
          value={this.state.password}
          onChangeText={this.handlePasswordUpdate}
          secureTextEntry
          autoCapitalize="none"
        />
        <Button title="PRIJAVA" onPress={this._login} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    //flex: 1,
    marginTop: 40,
    marginLeft: 30,
    marginRight: 30,
  },
  text: {
    fontFamily: "sans-serif-light",
    fontSize: 18,
    color: 'gray'
  },
  textInput: {
    padding:5,
    fontSize: 18,

  },
  error: {
    textAlign: 'center',
    color: 'red',
  },
})

const mapStateToProps = state => ({
  err: state.user.loginErr,
  token: state.user.token,
})

export default connect(mapStateToProps, {logInUser})(LoginScreen)