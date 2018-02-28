import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';
export default class FooterTabsBadgeExample extends Component {
  render() {
    return (
      <Container>
       {/* <Header />*/}
        <Content />
        <Footer>
          <FooterTab>
            <Button badge vertical>
              <Badge><Text>2</Text></Badge>
              <Icon name="apps" />
              <Text>Home</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>KD</Text>
            </Button>
            <Button active badge vertical>
              <Badge ><Text>100+</Text></Badge>
              <Icon active name="navigate" />
              <Text>Laporan</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Wisata</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}