import React from "react";
import { ScrollView, View, StyleSheet, Text, TextInput, PickerIOS, DatePickerIOS } from "react-native";
import colors from '../../config/colors';
import Ionicons from "react-native-vector-icons/Ionicons";
import SettingsTextInput from '../common/SettingsTextInput';

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
  /* add pickers for gender and birthdate, extract inputs to a separate component with input state/props */
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={[styles.container]}>
          <SettingsTextInput hintText="Username" placeholder="Not set"/>
          <SettingsTextInput hintText="Password" placeholder="Password" secureTextEntry={true}/>
          <View style={styles.separator}></View>
          <SettingsTextInput hintText="Weight" placeholder="Current weight, kg" keyboardType="decimal-pad"/>
          <SettingsTextInput hintText="Height" placeholder="Current height, cm" keyboardType="decimal-pad"/>
          <SettingsTextInput hintText="Physical activity" placeholder="Physical activity"/>
          <SettingsTextInput hintText="Target weight" placeholder="Target weight, kg" keyboardType="decimal-pad"/>
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
  separator: {
    marginTop: 30,
    marginBottom: 30
  },
});