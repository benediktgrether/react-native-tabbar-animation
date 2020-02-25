import React, { Component } from 'react';

import { View, Text, StyleSheet, Image } from 'react-native';
import {
  Card,
  CardItem,
  Thumbnail,
  Body,
  Left,
  Right,
  Button,
  Icon
} from 'native-base';

class CardComponent extends Component {
  render() {
    const images = {
      '1': require('./../../assets/image/feed/001.jpg'),
      '2': require('./../../assets/image/feed/002.jpg'),
      '3': require('./../../assets/image/feed/003.jpg'),
      '4': require('./../../assets/image/feed/004.jpg'),
      '5': require('./../../assets/image/feed/005.jpg'),
      '6': require('./../../assets/image/feed/006.jpg'),
      '7': require('./../../assets/image/feed/007.jpg'),
      '8': require('./../../assets/image/feed/008.jpg')
    };

    const profil = {
      '1': require('./../../assets/image/profil-256/256_35.jpg'),
      '2': require('./../../assets/image/profil-256/256_34.jpg'),
      '3': require('./../../assets/image/profil-256/256_33.jpg'),
      '4': require('./../../assets/image/profil-256/256_32.jpg'),
      '5': require('./../../assets/image/profil-256/256_31.jpg'),
      '6': require('./../../assets/image/profil-256/256_30.jpg'),
      '7': require('./../../assets/image/profil-256/256_29.jpg'),
      '8': require('./../../assets/image/profil-256/256_28.jpg')
    };

    const profilName = {
      '1': 'airpixels',
      '2': 'speator',
      '3': 'xbox',
      '4': 'anjsemark',
      '5': 'janinaphotos',
      '6': 'sargol',
      '7': 'J.Kings',
      '8': 'P.Design'
    };

    const userText = {
      '1':
        'Last chance to get your Airpixels prints before the holiday season. First 15 orders will receive a yet unreleased artwork for free. (30x40cm Fine Paper Print)',
      '2': 'I found bunch of hashtags to make me rich and famous',
      '3': 'RaceWeek.',
      '4':
        'Couple of weeks left until Christmas if your looking for last minutes ideas let’s make it happen..',
      '5': 'Have a great new week folks',
      '6': 'Clausina Glasswing',
      '7': 'Macro Daily',
      '8': 'Fight agains the Dragon - Illustration'
    };

    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={profil[this.props.imageSource]} />
            <Body>
              <Text>{profilName[this.props.imageSource]}</Text>
              <Text note>Jan 15,2019</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Image
            source={images[this.props.imageSource]}
            style={styles.imageWrapper}
          />
        </CardItem>
        <CardItem style={{ height: 45 }}>
          <Left>
            <Button transparent>
              <Icon
                name="ios-heart-empty"
                style={{ color: 'black', fontSize: 32 }}></Icon>
            </Button>
            <Button transparent>
              <Icon
                name="ios-text"
                style={{ color: 'black', fontSize: 32 }}></Icon>
            </Button>
            <Button transparent>
              <Icon
                name="ios-send"
                style={{ color: 'black', fontSize: 32 }}></Icon>
            </Button>
          </Left>
        </CardItem>
        <CardItem>
          <Text>{this.props.likes}</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{userText[this.props.imageSource]}</Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

export default CardComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageWrapper: {
    height: 200,
    width: null,
    flex: 1
  }
});
