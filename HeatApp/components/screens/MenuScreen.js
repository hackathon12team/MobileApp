import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from '../../config/colors';
import Ionicons from "react-native-vector-icons/Ionicons";

export default class MenuScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({focused, tintColor}) => (
      <Ionicons
        name={'ios-albums'}
        size={25}
        color={tintColor}
      />
    )
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[styles.container]}>
        <Text style={styles.text}>Menu screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: colors.screenBackgroundColor
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});