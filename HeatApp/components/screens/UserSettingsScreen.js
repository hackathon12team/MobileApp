import React from "react";
import { ScrollView, View, StyleSheet, Text, TextInput, PickerIOS, DatePickerIOS } from "react-native";
import colors from '../../config/colors';
import Ionicons from "react-native-vector-icons/Ionicons";

export default class UserSettingsScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({focused, tintColor}) => (
      <Ionicons
        name={'ios-settings'}
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
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={[styles.container]}>
          <View style={styles.inputWrap}>
            <Text style={styles.textHint}>Username</Text>
            <TextInput style={styles.textInput} placeholder="Not set"></TextInput>
          </View>
          <View style={styles.inputWrap}>
            <Text style={styles.textHint}>Password</Text>
            <TextInput style={styles.textInput} secureTextEntry={true} placeholder="Password"></TextInput>
          </View>
          <View style={styles.separator}></View>
          <View style={styles.inputWrap}>
            <Text style={styles.textHint}>Weight</Text>
            <TextInput style={styles.textInput} keyboardType="decimal-pad" placeholder="Current weight, kg"></TextInput>
          </View>
          <View style={styles.inputWrap}>
            <Text style={styles.textHint}>Height</Text>
            <TextInput style={styles.textInput} keyboardType="decimal-pad" placeholder="Current height, cm"></TextInput>
          </View>
          <View style={styles.inputWrap}>
            <Text style={styles.textHint}>Physical activity</Text>
            <TextInput style={styles.textInput} placeholder="Physical activity"></TextInput>
          </View>
          <View style={styles.inputWrap}>
            <Text style={styles.textHint}>Target weight</Text>
            <TextInput style={styles.textInput} keyboardType="decimal-pad" placeholder="Target weight, kg"></TextInput>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1
  },
  container: {
    flex: 1,
    backgroundColor: colors.screenBackgroundColor,
    paddingTop: 30,
    justifyContent: "flex-start"
  },
  inputWrap: {
    flexDirection: 'row'
  },
  separator: {
    marginTop: 30,
    marginBottom: 30
  },
  textHint: {
    backgroundColor: colors.white,
    paddingTop: 7,
    paddingLeft: 10,
    marginBottom: 1,
    height: 40,
    fontSize: 20,
    textAlign: 'left'
  },
  textInput: {
    flex: 1,
    backgroundColor: colors.white,
    color: colors.textColorGray,
    paddingRight: 10,
    marginBottom: 1,
    fontSize: 20,
    height: 40,
    textAlign: 'right',
  }
});