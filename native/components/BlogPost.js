import React, { Component } from 'react'
import { Text, ScrollView, View, Image } from 'react-native'
import { Container, Header, Title, Content, Button, Icon, Thumbnail } from 'native-base';
import HTMLView from 'react-native-htmlview'
import _ from 'lodash'
export default class BlogPost extends Component {
  render() {
    const post = this.props.post
    return (
      <Container> 
        <Header>
          <Button transparent>
            <Icon name='ios-arrow-back' onPress={ this.props.goBack } />
          </Button>
          <Title>{ post.title }</Title>
        </Header>
        <Content style={{ backgroundColor: '#fff' }}>
          <ScrollView>
            <View>
              <Image style={{ flex: 1, height: 200 }} source={{ uri: _.find(post.metafields, { key: 'hero' }).imgix_url + '?w=600' }} />
            </View>
            <View style={{ padding: 20 }}>
              <View style={{ marginBottom: 20 }}>
                <Thumbnail style={{ marginBottom: 10 }} size={40} source={{uri: _.find(post.metafields, { key: 'author' }).object.metafields[0].imgix_url + '?w=600' }} />
                <Text>by { _.find(post.metafields, { key: 'author' }).object.title }</Text>
              </View>
              <HTMLView value={ post.content } style={{ marginTop: 20 }}/>
            </View>
          </ScrollView>
        </Content>
      </Container>
    )
  }
}