import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class ProfileScreen extends React.Component {

  static navigationOptions = {
    title: 'Profile',
  };

  render() {
    const {navigate} = this.props.navigation;
    console.log('navigate', navigate);
    return (
      <View style={styles.container}>
        <Text>I am Profile</Text>
        <Button
          title="Go to Exit"
          onPress={() => navigate('Exit', {name: 'Jane'})}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
