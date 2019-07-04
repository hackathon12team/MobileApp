import React from "react";
import { ScrollView, View, StyleSheet, Text, TextInput, PickerIOS, DatePickerIOS, TouchableOpacity } from "react-native";
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

  genderMatch = {
    1: 'Male',
    2: 'Female',
    3: 'Other'
  };

  constructor(props) {
    super(props);
    this.state = {
      gender: 3,
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

  updateGender(value) {
    this.updateState('gender', value);
  }

  genderSelection() {
    this.updateState('showGenderSelection', !this.state.showGenderSelection);
  }

  render() {
  /* add picker birthdate */
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

          <TouchableOpacity onPress={this.genderSelection.bind(this)}>
            <View style={styles.inputWrap}>
              <View style={styles.hintTextWrapper}>
                <Text style={styles.textHint}>Gender</Text>
                <Text style={styles.textValue}>
                  {this.genderMatch[this.state.gender]}
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          {!!this.state.showGenderSelection &&
            <PickerIOS selectedValue={this.state.gender}
                       onValueChange={(newValue) => this.updateGender(newValue)}>
              <PickerIOS.Item value={1} label='Male'/>
              <PickerIOS.Item value={2} label='Female'/>
              <PickerIOS.Item value={3} label='Other'/>
            </PickerIOS>
          }

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



  inputWrap: {
    flexDirection: 'row',
  },
  hintTextWrapper: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 1,
    height: 40
  },
  textHint: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 20,
    textAlign: 'left'
  },
  textValue: {
    flex: 1,
    color: colors.textColorGray,
    paddingRight: 10,
    fontSize: 20,
    textAlign: 'right',
  }
});