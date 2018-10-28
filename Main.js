import React from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux'

class Main extends React.Component {
  state = {}

  render() {
      return (
        <View style={{paddingTop:30}}>
          <Text>MAIN SCREEN</Text>
        </View>
      )
  }
}


const mapStateToProps = state => ({
	xx: 'xx',
})
export default connect(mapStateToProps)(Main)