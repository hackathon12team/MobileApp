import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import colors from '../../config/colors';


export default class SettingsTextInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={styles.inputWrap}>
        <View style={styles.hintTextWrapper}>
          <Text style={styles.textHint}>{this.props.hintText}</Text>
        </View>
        <TextInput style={styles.textInput}
                   placeholder={this.props.placeholder}
                   keyboardType={this.props.keyboardType || 'default'}
                   secureTextEntry={!!this.props.secureTextEntry}>
          {this.props.text || ''}
        </TextInput>
      </View>
      );
  }
} 


const styles = StyleSheet.create({
  inputWrap: {
    flexDirection: 'row'
  },
  hintTextWrapper: {
    backgroundColor: colors.white,
    justifyContent: 'center',
    marginBottom: 1,
    height: 40
  },
  textHint: {
    backgroundColor: colors.white,
    paddingLeft: 10,
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