import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements'
import PropTypes from 'prop-types';

const RowHomePage = props => (
  <View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonBackground}>
            <Button 
              raised={'True'}
              buttonStyle={styles.button}
              textStyle={styles.buttonText}
              title={props.item.name}
              onPress={() => props.onSelectItem(props)}
            />
          </TouchableOpacity>
        </View>
    
  </View>
);

RowHomePage.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent:'space-between',
  },
  buttonBackground: {
    flex:1,
    marginBottom: 15,
    marginLeft : 10,
  },
  button : {
//    raised: true,
    color: "white",
    backgroundColor: "#0096F7",
    borderRadius: 5,
    height: 80,
    
  },
  buttonText : {
    fontSize: 20,
    fontWeight: 'bold', 
  },
  
})

export default RowHomePage
