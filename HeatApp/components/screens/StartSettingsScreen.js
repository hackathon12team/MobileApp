import React from "react";
import {
  Text, StyleSheet, Dimensions, TouchableOpacity, View
} from "react-native";
import colors from './../../config/colors';
import { ApiService } from './../../models/ApiService';

const {width: WIDTH} = Dimensions.get('window');

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
