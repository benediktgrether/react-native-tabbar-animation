import React, { Component } from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import {
  Container,
  Content,
  Thumbnail,
  Header,
  Left,
  Right,
  Body
} from 'native-base';

class Notification extends Component {
  render() {
    return (
      // <Container style={styles.container}>
      //   <Content style={styles.wrapper}>
      //     <Thumbnail
      //       style={styles.profilWrapper}
      //       source={require("./../../assets/image/profil-256/256_0.jpg")}
      //     />
      //     <Body>
      //       <Text>lalalalala</Text>
      //     </Body>
      //     <Button bordered dark title="Folgen"></Button>
      //   </Content>
      // </Container>

      <Container style={styles.container}>
        <Header style={styles.headerWrapper}>
          <Left style={{ alignItems: 'center' }}>
            <Text>Abonniert</Text>
          </Left>
          <Left style={{ alignItems: 'center' }}>
            <Text>Du</Text>
          </Left>
        </Header>
        <Content>
          <View>
            {/* Start Follower */}
            <View style={styles.wrapper}>
              <Thumbnail
                style={styles.profilWrapper}
                source={require('../image/profil-256/256_0.jpg')}
              />
              <View style={styles.textWrapper}>
                <Text>simba_adventures_ </Text>
                <Text>folgt dir jetzt</Text>
              </View>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnColor}>Folgen</Text>
              </TouchableOpacity>
            </View>
            {/* Endfollower */}
            {/* Start Follower */}
            <View style={styles.wrapper}>
              <Thumbnail
                style={styles.profilWrapper}
                source={require('../image/profil-256/256_15.jpg')}
              />
              <View style={styles.textWrapper}>
                <Text>helloWorld </Text>
                <Text>folgt dir jetzt</Text>
              </View>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnColor}>Folgen</Text>
              </TouchableOpacity>
            </View>
            {/* Endfollower */}
            {/* Likes */}
            <View style={styles.wrapper}>
              <Thumbnail
                style={styles.profilWrapper}
                source={require('../image/profil-256/256_15.jpg')}
              />
              <View style={styles.textWrapper}>
                <Text>helloWorld </Text>
                <Text>hat dein Bild geliked</Text>
              </View>
              <Image
                style={styles.imageWrapper}
                source={require('../image/profil/001.jpg')}
              />
            </View>
            {/* Endlike */}
            {/* Likes */}
            <View style={styles.wrapper}>
              <Thumbnail
                style={styles.profilWrapper}
                source={require('../image/profil-256/256_5.jpg')}
              />
              <View style={styles.textWrapper}>
                <Text>yoxiok </Text>
                <Text>hat dein Bild geliked</Text>
              </View>
              <Image
                style={styles.imageWrapper}
                source={require('../image/profil/001.jpg')}
              />
            </View>
            {/* Endlike */}
            {/* Likes */}
            <View style={styles.wrapper}>
              <Thumbnail
                style={styles.profilWrapper}
                source={require('../image/profil-256/256_29.jpg')}
              />
              <View style={styles.textWrapper}>
                <Text>abolfazl </Text>
                <Text>hat dein Bild geliked</Text>
              </View>
              <Image
                style={styles.imageWrapper}
                source={require('../image/profil/001.jpg')}
              />
            </View>
            {/* Endlike */}
            {/* Likes */}
            <View style={styles.wrapper}>
              <Thumbnail
                style={styles.profilWrapper}
                source={require('../image/profil-256/256_24.jpg')}
              />
              <View style={styles.textWrapper}>
                <Text>amon </Text>
                <Text>hat dein Bild geliked</Text>
              </View>
              <Image
                style={styles.imageWrapper}
                source={require('../image/profil/001.jpg')}
              />
            </View>
            {/* Endlike */}
            {/* Likes */}
            <View style={styles.wrapper}>
              <Thumbnail
                style={styles.profilWrapper}
                source={require('../image/profil-256/256_22.jpg')}
              />
              <View style={styles.textWrapper}>
                <Text>drephotoworkmacro </Text>
                <Text>hat dein Bild geliked</Text>
              </View>
              <Image
                style={styles.imageWrapper}
                source={require('../image/profil/001.jpg')}
              />
            </View>
            {/* Endlike */}
            {/* Likes */}
            <View style={styles.wrapper}>
              <Thumbnail
                style={styles.profilWrapper}
                source={require('../image/profil-256/256_5.jpg')}
              />
              <View style={styles.textWrapper}>
                <Text>flyouzdo </Text>
                <Text>hat dein Bild geliked</Text>
              </View>
              <Image
                style={styles.imageWrapper}
                source={require('../image/profil/001.jpg')}
              />
            </View>
            {/* Endlike */}
            {/* Start Follower */}
            <View style={styles.wrapper}>
              <Thumbnail
                style={styles.profilWrapper}
                source={require('../image/profil-256/256_5.jpg')}
              />
              <View style={styles.textWrapper}>
                <Text>flyouzdo </Text>
                <Text>folgt dir jetzt</Text>
              </View>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnColor}>Folgen</Text>
              </TouchableOpacity>
            </View>
            {/* Endfollower */}
            {/* Start Follower */}
            <View style={styles.wrapper}>
              <Thumbnail
                style={styles.profilWrapper}
                source={require('../image/profil-256/256_22.jpg')}
              />
              <View style={styles.textWrapper}>
                <Text>drephotoworkmacro </Text>
                <Text>folgt dir jetzt</Text>
              </View>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnColor}>Folgen</Text>
              </TouchableOpacity>
            </View>
            {/* Endfollower */}
          </View>
        </Content>
      </Container>
    );
  }
}

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1
    // flexDirection: "row",
    // paddingHorizontal: 7
  },
  headerWrapper: {
    flexDirection: 'row',
    // justifyContent: "space-around"
    alignItems: 'center',
    alignContent: 'center'
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 7,
    paddingHorizontal: 10
  },
  btn: {
    backgroundColor: 'rgb(55, 151, 241)',
    paddingHorizontal: 16,
    paddingVertical: 5,
    borderRadius: 4
  },
  btnColor: {
    color: 'white'
  },
  textWrapper: {
    width: 60 + '%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignContent: 'flex-start'
  },
  imageWrapper: {
    width: 60,
    height: 60
  }
});
