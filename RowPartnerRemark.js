import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';

const RowPartnerRemark = props => (
  <View>
    <Text style={styles.date}>
    {`${props.item.date}  ${props.item.time}`}
    </Text>
    <Text style={styles.text}>
    {props.item.shortDescription}
    </Text>
  </View>
);

// RowPartnerRemark.propTypes = {
//   name: PropTypes.string,
//   id: PropTypes.string,
// };

const styles = StyleSheet.create({
  date: {
    fontFamily: "sans-serif-light",
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0096F7'
  },
  text: {
    fontFamily:'Times New Roman',
    fontSize: 18,
    marginBottom:15,
    marginLeft:15,
    marginRight: 10,
  },
})

export default RowPartnerRemark
