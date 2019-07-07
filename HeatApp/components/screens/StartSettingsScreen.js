import React from "react";
import {
  Text, StyleSheet, TouchableOpacity, View
} from "react-native";
import colors from '../../config/colors';
import dimensions from '../../config/dimensions';
import { ApiService } from './../../models/ApiService';

export default class StartSettingsScreen extends React.Component {
  _start = () => {
    this.props.navigation.navigate("Main");
  };

  constructor() {
    super();
    this.apiService = new ApiService();
  }

  render() {
    return (
      <View>
      <TouchableOpacity style={styles.startBtn}>
        <Text style={styles.text} onPress={this._start}> Start </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.startBtn}>
        <Text style={styles.text} onPress={this.register}> Register </Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  startBtn: {
    width: dimensions.WINDOW_WIDTH - 55,
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
