import React, { Component } from 'react';

import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

import CardComponent from './CardComponent';
import {
  Container,
  Content,
  Thumbnail,
  Header,
  Left,
  Right,
  Body
} from 'native-base';

// headerLeft: (
//   <Image
//     style={{
//       marginLeft: 10,
//       width: 20,
//       height: 20,
//       resizeMode: "contain"
//       // backgroundColor: "gray"
//     }}
//     source={require("./../../assets/icons/png/home-outline.png")}
//   />
// ),
// title: "Instagram",
// headerRight: (
//   <Image
//     style={{
//       marginRight: 10,
//       width: 20,
//       height: 20,
//       resizeMode: "contain"
//       // backgroundColor: "gray"
//     }}
//     source={require("./../../assets/icons/png/home-outline.png")}
//   />
// )

class Home extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Image
              style={styles.headerImageLeft}
              source={require('./../../assets/icons/png/cameraicon.png')}
            />
          </Left>
          <Body>
            <Image
              style={styles.headerLogo}
              source={require('./../../assets/image/logo/instagram_logo.png')}></Image>
            {/* <Text>Instagram</Text> */}
          </Body>
          <Right>
            <Image
              style={styles.headerImageRight}
              source={require('./../../assets/icons/png/sendMessage.png')}
            />
          </Right>
        </Header>
        <Content>
          <View style={{ height: 100 }}>
            <View style={styles.storyWrapper}>
              <Text>Stories</Text>
              <Text>Watch All</Text>
            </View>
            <View style={{ flex: 3 }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  alignItems: 'center',
                  paddingStart: 5,
                  paddingEnd: 5
                }}>
                <Thumbnail
                  style={styles.thumbnailWrapper}
                  source={require('./../../assets/image/profil-256/256_0.jpg')}
                />
                <Thumbnail
                  style={styles.thumbnailWrapper}
                  source={require('./../../assets/image/profil-256/256_1.jpg')}
                />
                <Thumbnail
                  style={styles.thumbnailWrapper}
                  source={require('./../../assets/image/profil-256/256_2.jpg')}
                />
                <Thumbnail
                  style={styles.thumbnailWrapper}
                  source={require('./../../assets/image/profil-256/256_3.jpg')}
                />
                <Thumbnail
                  style={styles.thumbnailWrapper}
                  source={require('./../../assets/image/profil-256/256_4.jpg')}
                />
                <Thumbnail
                  style={styles.thumbnailWrapper}
                  source={require('./../../assets/image/profil-256/256_5.jpg')}
                />
                <Thumbnail
                  style={styles.thumbnailWrapper}
                  source={require('./../../assets/image/profil-256/256_6.jpg')}
                />
                <Thumbnail
                  style={styles.thumbnailWrapper}
                  source={require('./../../assets/image/profil-256/256_7.jpg')}
                />
                <Thumbnail
                  style={styles.thumbnailWrapper}
                  source={require('./../../assets/image/profil-256/256_8.jpg')}
                />
                <Thumbnail
                  style={styles.thumbnailWrapper}
                  source={require('./../../assets/image/profil-256/256_9.jpg')}
                />
                <Thumbnail
                  style={styles.thumbnailWrapper}
                  source={require('./../../assets/image/profil-256/256_10.jpg')}
                />
              </ScrollView>
            </View>
          </View>
          <CardComponent imageSource="1" likes="101" />
          <CardComponent imageSource="2" likes="201" />
          <CardComponent imageSource="3" likes="301" />
          <CardComponent imageSource="4" likes="31" />
          <CardComponent imageSource="5" likes="23" />
          <CardComponent imageSource="6" likes="435" />
          <CardComponent imageSource="7" likes="43" />
          <CardComponent imageSource="8" likes="12" />
        </Content>
      </Container>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  headerImageLeft: {
    marginLeft: 10,
    width: 24,
    height: 24,
    resizeMode: 'contain'
  },
  headerLogo: {
    // width: 24,
    height: 36,
    resizeMode: 'contain'
  },

  headerImageRight: {
    marginRight: 10,
    width: 24,
    height: 24,
    resizeMode: 'contain'
  },
  storyWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 7
  },
  thumbnailWrapper: {
    marginHorizontal: 5,
    borderColor: 'pink',
    borderWidth: 2
  }
});
