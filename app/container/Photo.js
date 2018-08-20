import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default class PhotoScreen extends Component {
  static navigationOptions = {
    title: 'Photo',
  };

  render() {
    const { navigation } = this.props;
    const fullPhoto = navigation.getParam('fullPhoto');

    return(
      <View style={{flex: 1}}>
        <Image 
          style={styles.image}
          source={{ uri: fullPhoto }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    alignSelf: 'stretch',
    flex: 1,
    width: null,
    justifyContent: 'center',
    alignItems: 'center', 
  }
})