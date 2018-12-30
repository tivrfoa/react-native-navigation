import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const {navigate} = this.props.navigation;
    console.log('navigate', navigate);
    return (
      <View style={styles.container}>
        <Text>I am HomeScreen</Text>
        <Button
          title="Go to profile"
          onPress={() => navigate('Profile', {name: 'Jane'})}
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
