import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class ExitScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      params: props.navigation.state.params,
    };
  }

  static navigationOptions = {
    title: 'Exit',
  };

  render() {
    // console.log('this.props', this.props);
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>I am exit</Text>
        <Text>Hello {this.state.params.name}</Text>
        <Button
          title="Go back to Home"
          onPress={() => navigate('Home', {name: 'Jane'})}
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
