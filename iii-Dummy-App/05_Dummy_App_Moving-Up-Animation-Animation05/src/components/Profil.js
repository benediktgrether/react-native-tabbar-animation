import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions
} from 'react-native';

import {
  Container,
  Content,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon
} from 'native-base';

const gridActive = require('./../../assets/icons/png/grid.png');
const gridNoActive = require('./../../assets/icons/png/grid-no-active.png');
const linkedActive = require('./../../assets/icons/png/linking.png');
const linkedNoActive = require('./../../assets/icons/png/linking-no-active.png');

const ownImages = [
  require('./../../assets/image/profil/001.jpg'),
  require('./../../assets/image/profil/002.jpg'),
  require('./../../assets/image/profil/003.jpg'),
  require('./../../assets/image/profil/004.jpg'),
  require('./../../assets/image/profil/005.jpg'),
  require('./../../assets/image/profil/006.jpg'),
  require('./../../assets/image/profil/007.jpg'),
  require('./../../assets/image/profil/008.jpg'),
  require('./../../assets/image/profil/009.jpg'),
  require('./../../assets/image/profil/010.jpg')
];

const linkedImages = [
  require('./../../assets/image/links/001.jpg'),
  require('./../../assets/image/links/002.jpg'),
  require('./../../assets/image/links/003.jpg'),
  require('./../../assets/image/links/004.jpg'),
  require('./../../assets/image/links/005.jpg'),
  require('./../../assets/image/links/006.jpg'),
  require('./../../assets/image/links/007.jpg'),
  require('./../../assets/image/links/008.jpg'),
  require('./../../assets/image/links/009.jpg'),
  require('./../../assets/image/links/010.jpg')
];

const { width, height } = Dimensions.get('window');

class Profil extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0
    };
  }

  segmentClicked = (index) => {
    this.setState({
      activeIndex: index
    });
  };

  renderSectionOne = () => {
    return ownImages.map((image, index) => {
      return (
        <View
          key={index}
          style={[
            { width: width / 3 },
            { height: width / 3 },
            { marginBottom: 2 },
            index % 3 !== 0 ? { paddingLeft: 2 } : { paddingLeft: 0 }
          ]}>
          <Image
            style={{ flex: 1, width: undefined, height: undefined }}
            source={image}
          />
        </View>
      );
    });
  };

  renderSectionTwo = () => {
    return linkedImages.map((image, index) => {
      return (
        <View
          key={index}
          style={[
            { width: width / 3 },
            { height: width / 3 },
            { marginBottom: 2 },
            index % 3 !== 0 ? { paddingLeft: 2 } : { paddingLeft: 0 }
          ]}>
          <Image
            style={{ flex: 1, width: undefined, height: undefined }}
            source={image}
          />
        </View>
      );
    });
  };

  renderSection = () => {
    if (this.state.activeIndex == 0) {
      return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {this.renderSectionOne()}
        </View>
      );
    } else {
      return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {this.renderSectionTwo()}
        </View>
      );
    }
  };
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left></Left>
          <Body>
            <Text>Skippy</Text>
          </Body>
          <Right>
            <Image
              style={styles.headerImageRight}
              source={require('./../../assets/icons/png/menu_profil.png')}
            />
          </Right>
        </Header>
        <Content>
          {/* Profil Infos */}
          <View style={{ paddingTop: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <Image
                  style={styles.imageUser}
                  source={require('./../../assets/image/profil-256/256_35.jpg')}
                />
              </View>
              <View style={{ flex: 3 }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around'
                  }}>
                  <View stlye={{ alignItems: 'center' }}>
                    <Text>20</Text>
                    <Text style={styles.profilLabel}>Posts</Text>
                  </View>
                  <View stlye={{ alignItems: 'center' }}>
                    <Text>206</Text>
                    <Text style={styles.profilLabel}>Followers</Text>
                  </View>
                  <View stlye={{ alignItems: 'center' }}>
                    <Text>107</Text>
                    <Text style={styles.profilLabel}>Following</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                  <Button bordered dark style={styles.settingsButton}>
                    <Text>Edit Profile</Text>
                  </Button>
                  <Button bordered dark style={styles.settingsButtonSettings}>
                    <Icon style={{ fontSize: 16 }} name="ios-settings" />
                  </Button>
                </View>
              </View>
            </View>
            <View style={{ paddingVertical: 10, paddingHorizontal: 10 }}>
              <Text style={{ fontWeight: 'bold' }}>Insta Gram</Text>
              <Text>Computer Sciene | Geek | Nerd</Text>
              <Text>www.github.com</Text>
            </View>
          </View>
          {/* Profil Pictures View */}
          <View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <TouchableWithoutFeedback
                onPress={() => this.segmentClicked(0)}
                active={this.state.activeIndex == 0}>
                <Image
                  style={styles.iconsProfil}
                  source={
                    this.state.activeIndex == 0 ? gridActive : gridNoActive
                  }
                />
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback
                onPress={() => this.segmentClicked(1)}
                active={this.state.activeIndex == 1}>
                <Image
                  style={styles.iconsProfil}
                  source={
                    this.state.activeIndex == 1 ? linkedActive : linkedNoActive
                  }
                />
              </TouchableWithoutFeedback>
            </View>
            {this.renderSection()}
          </View>
        </Content>
      </Container>
    );
  }
}

export default Profil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  imageUser: {
    width: 75,
    height: 75,
    borderRadius: 37.5
  },
  profilLabel: {
    fontSize: 10,
    color: 'grey'
  },
  settingsButton: {
    flex: 3,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30
  },
  settingsButtonSettings: {
    flex: 1,
    marginLeft: 5,
    marginRight: 10,
    justifyContent: 'center',
    alignContent: 'center',
    height: 30
  },
  headerImageLeft: {
    marginLeft: 10,
    width: 20,
    height: 20,
    resizeMode: 'contain'
  },
  headerImageRight: {
    marginRight: 10,
    width: 20,
    height: 20,
    resizeMode: 'contain'
  },
  iconsProfil: {
    width: 20,
    height: 20,
    marginVertical: 15
    // resizeMode: "center"
  }
});
