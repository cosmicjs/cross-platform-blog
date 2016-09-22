import React, { Component } from 'react'
import { Text, Image, StyleSheet } from 'react-native'
import { Container, View, Button } from 'native-base';
import _ from 'lodash'
export default class LandingPage extends Component {
  render() {
    const landing_page = this.props.landing_page
    return (
      <Container> 
        <Image style={{ flex: 1, height: 200 }} source={{ uri: _.find(landing_page.metafields, { key: 'background_image' }).imgix_url }}>
          <View style={ styles.content }>
            <Text style={ styles.headline }>{ _.find(landing_page.metafields, { key: 'headline'}).value }</Text>
            <Button style={ styles.button } block large info onPress={ this.props.handlePressViewBlog }>View Blog</Button>
          </View>
        </Image>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  content:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  headline: {
    width: 300,
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowOffset: { width: 1, height: 1},
    textShadowRadius: 1,
    textShadowColor: '#000',
    textAlign: 'center'
  },
  button: {
    height: 50,
    marginTop: 20,
    marginLeft: 50,
    marginRight: 50
  }
})