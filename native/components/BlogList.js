import React, { Component } from 'react'
import { Text, TouchableHighlight } from 'react-native'
import { Container, Header, Title, Content, List, ListItem, Thumbnail } from 'native-base';
import _ from 'lodash'
export default class BlogPost extends Component {
  render() {
    const posts = this.props.posts
    const objects = this.props.objects
    const blog_list_page = _.find(objects, { slug: 'blog' })
    const blog_title = _.find(blog_list_page.metafields, { key: 'blog_title' }).value
    return (
      <Container> 
        <Header>
          <Title>{ blog_title }</Title>
        </Header>
        <Content style={{ backgroundColor: '#fff' }}>
          <List>
            {
              posts.map(post => {
                return (
                  <ListItem key={ post._id } onPress={ this.props.handlePress.bind(this, post) }>
                    <Thumbnail size={80} source={{uri: _.find(post.metafields, { key: 'hero' }).imgix_url + '?w=600' }} />
                    <Text>
                      { post.title }
                    </Text>
                  </ListItem>
                )
              })
            }
          </List>
        </Content>
      </Container>
    )
  }
}