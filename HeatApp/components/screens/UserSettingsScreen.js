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
    this.state = {
      username: '',
      password: '',
    };
  }

  getStateClone() {
    var stateClone = {};
    Object.keys(this.state).forEach(key => {
      stateClone[key] = this.state[key];
    });
    return stateClone;
  }

  updateState(field, value) {
    var newState = this.getStateClone();
    newState[field] = value;
    this.setState(newState);
  }

  updateUsername(text) {
    this.updateState('username', text);
  }

  updatePassword(text) {
    this.updateState('password', text);
  }

  updateWeight(text) {
    this.updateState('weight', parseFloat(text));
  }

  updateHeight(text) {
    this.updateState('height', parseFloat(text));
  }

  updatePhysicalActivity(text) {
    this.updateState('physicalActivity', text);
  }

  updateTargetWeight(text) {
    this.updateState('targetWeight', parseFloat(text));
  }

  render() {
  /* add pickers for gender and birthdate, extract inputs to a separate component with input state/props */
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={[styles.container]}>
          <SettingsTextInput hintText="Username"
                             placeholder="Not set"
                             text={this.state.username}
                             textUpdate={this.updateUsername.bind(this)}/>
          <SettingsTextInput hintText="Password"
                             placeholder="Password"
                             secureTextEntry={true}
                             text={this.state.password}
                             textUpdate={this.updatePassword.bind(this)}/>

          <View style={styles.separator}></View>

          <SettingsTextInput hintText="Weight"
                             placeholder="Current weight, kg"
                             keyboardType="decimal-pad"
                             text={this.state.weight}
                             textUpdate={this.updateWeight.bind(this)}/>
          <SettingsTextInput hintText="Height"
                             placeholder="Current height, cm"
                             keyboardType="decimal-pad"
                             text={this.state.height}
                             textUpdate={this.updateHeight.bind(this)}/>
          <SettingsTextInput hintText="Physical activity"
                             placeholder="Physical activity"
                             text={this.state.physicalActivity}
                             textUpdate={this.updatePhysicalActivity.bind(this)}/>
          <SettingsTextInput hintText="Target weight"
                             placeholder="Target weight, kg"
                             keyboardType="decimal-pad"
                             text={this.state.targetWeight}
                             textUpdate={this.updateTargetWeight.bind(this)}/>
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