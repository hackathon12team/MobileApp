import React from "react";
import {
  Text, StyleSheet, Dimensions, TouchableOpacity
} from "react-native";
import colors from './../../config/colors';

const {width: WIDTH} = Dimensions.get('window');

export default class LoginScreen extends React.Component {
  _start = () => {
    this.props.navigation.navigate("Main");
  };

  constructor() {
    super();
  }

  render() {
    return (
      <TouchableOpacity style={styles.startBtn}>
        <Text style={styles.text} onPress={this._start}> Start </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  startBtn: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: colors.btnBackgroundColor,
    justifyContent: 'center',
    marginTop: 20
  },
  text: {
    color: colors.textColor,
    fontSize: 16,
    textAlign: 'center'
  }
});
