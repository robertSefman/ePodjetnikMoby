import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';

const RowVisitedPartner = props => (
  
  <View>
    <Text style={styles.text}>{props.item.name}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonBackground}>
            <Button 
              style={styles.button}
              title='Osnovni podatki'
              onPress={() => props.onSelectPartner(props)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonBackground}>
            <Button style={styles.button} title= {`Opombe (${props.item.noOfComments})`} />
          </TouchableOpacity>
        </View>
    
  </View>
);

RowVisitedPartner.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "sans-serif-light",
    fontSize: 20,
    fontWeight: 'bold',
  },
  button : {
    flex:1
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent:'space-between',
    marginLeft:30


  },
  buttonBackground: {
    flex:1,
    marginBottom: 15,
    marginLeft : 10,

  }
  
})

export default RowVisitedPartner
