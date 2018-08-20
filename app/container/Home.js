import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);
    
    this.state = {
      author: '' ,
      photo: '' ,
      namePhoto: '',
      fullPhoto: '',
    }
  }

    componentDidMount () {
      fetch('https://api.unsplash.com/photos/random?count=2&client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9')
      .then((response) => response.json() )
      .then((responseJson) => {
        this.setState({
          author: responseJson.user.name,
          photo: responseJson.urls.small,
          namePhoto: responseJson.id,
          fullPhoto: responseJson.urls.full,
        })
      })
      .catch((err) => {
        console.log(err)
      });
  };


  render() {
    return(
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#99ccff',
      }}>
          <Text style={styles.item}>photoID: {this.state.namePhoto}</Text>
          <Text style={styles.item}>author: {this.state.author}</Text>
          <TouchableOpacity onPress={() =>
              this.props.navigation.navigate('Photo', {
              fullPhoto: this.state.fullPhoto,
            })
          }
          >
            <Image
            style={{width: 300, height: 300}}
            source={{ uri: this.state.photo}}
            />
          </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});