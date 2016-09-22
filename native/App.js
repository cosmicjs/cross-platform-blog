import React, { Component } from 'react'
import { Text, View, Navigator } from 'react-native'
import { Container, Header, Title, Content, Spinner } from 'native-base';
import _ from 'lodash'
import LandingPage from './components/LandingPage'
import BlogList from './components/BlogList'
import BlogPost from './components/BlogPost'
import config from './config'
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      objects: []
    }
    this.getObjects()
  }
  getObjects() {
    fetch('https://api.cosmicjs.com/v1/' + config.COSMIC_BUCKET + '/objects')
    .then(response => response.json())
    .then(responseJson => {
      this.setState({
        objects: responseJson.objects,
        loading: false
      })
    })
    .catch(error => {
      console.error(error)
    })
  }
  handlePress(navigator, post) {
    this.setState({ objects: this.state.objects, post })
    navigator.push({
      name: 'BlogPost',
    })
  }
  handlePressViewBlog(navigator, post) {
    navigator.push({
      name: 'BlogList',
    })
  }
  goBack(navigator) {
    navigator.pop()
  }
  renderScene(route, navigator) {
    const objects = this.state.objects
    const posts = objects.filter(object => {
      if (object.type_slug === 'posts')
        return object
    })
    const landing_page = _.find(objects, { slug: 'landing-page' })
    if(route.name === 'LandingPage') {
      return <LandingPage landing_page={ landing_page } handlePressViewBlog={ this.handlePressViewBlog.bind(this, navigator) } />
    }
    if(route.name === 'BlogList') {
      return <BlogList handlePress={ this.handlePress.bind(this, navigator) } posts={ posts } objects={ objects }/>
    }
    if(route.name === 'BlogPost') {
      return <BlogPost goBack={ this.goBack.bind(this, navigator) } post={ this.state.post } />
    }
  }
  render() {
    let posts
    if (this.state.loading) {
      return (
        <Container> 
          <Header>
            <Title>Cross-Platform Blog</Title>
          </Header>
          <Content>
            <Spinner style={ { marginTop: 50 } } color='#00afd7' />
          </Content>
        </Container>
      )
    }
    return (
      <Navigator
        initialRoute={{ name: 'LandingPage' }}
        renderScene={ (route, navigator) => this.renderScene(route, navigator) }
      />
    );
  }
}