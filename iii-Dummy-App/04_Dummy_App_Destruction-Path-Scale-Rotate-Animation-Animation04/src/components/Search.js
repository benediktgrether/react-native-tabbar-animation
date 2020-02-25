import React, { Component } from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Dimensions
} from "react-native";
import {
  Container,
  Content,
  Thumbnail,
  Header,
  Left,
  Right,
  Body
} from "native-base";

const ownImages = [
  require("./../../assets/image/search/001.jpg"),
  require("./../../assets/image/search/002.jpg"),
  require("./../../assets/image/search/003.jpg"),
  require("./../../assets/image/search/004.jpg"),
  require("./../../assets/image/search/005.jpg"),
  require("./../../assets/image/search/006.jpg"),
  require("./../../assets/image/search/007.jpg"),
  require("./../../assets/image/search/008.jpg"),
  require("./../../assets/image/search/009.jpg"),
  require("./../../assets/image/search/010.jpg"),
  require("./../../assets/image/search/011.jpg"),
  require("./../../assets/image/search/012.jpg"),
  require("./../../assets/image/search/013.jpg"),
  require("./../../assets/image/search/014.jpg"),
  require("./../../assets/image/search/015.jpg"),
  require("./../../assets/image/search/016.jpg"),
  require("./../../assets/image/search/017.jpg"),
  require("./../../assets/image/search/018.jpg"),
  require("./../../assets/image/search/019.jpg"),
  require("./../../assets/image/search/020.jpg")
];

const { width, height } = Dimensions.get("screen");

class Search extends Component {
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
          ]}
        >
          <Image
            style={{ flex: 1, width: undefined, height: undefined }}
            source={image}
          />
        </View>
      );
    });
  };
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left style={{ flexDirection: "row", alignContent: "center" }}>
            <Image
              style={styles.searchIcon}
              source={require("./../../assets/icons/png/search-outline.png")}
            />
            <TextInput
              style={{ fontSize: 20, marginLeft: 10 }}
              placeholder="Suchen"
            ></TextInput>
          </Left>
        </Header>
        <Content style={{ marginTop: 7 }}>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {this.renderSectionOne()}
          </View>
        </Content>
      </Container>
    );
  }
}

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  searchIcon: {
    width: 20,
    height: 20
  }
});
