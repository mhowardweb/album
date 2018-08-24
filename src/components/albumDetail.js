import React from "react";
import { Text, View, Image, Linking } from "react-native";
import Card from "./card";
import CardSection from "./cardSection";
import Button from "./button";

const AlbumDetail = props => {
  const {
    headerContentStyle,
    thumbnailStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle
  } = styles;
  const { title, artist, thumbnail_image, image, url } = props.album;

  const handleButton = () => {
    return Linking.openURL(url);
  };

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={imageStyle} source={{ uri: image }} />
      </CardSection>

      <CardSection>
        <Button onPress={handleButton} text="Buy Now" />
      </CardSection>
    </Card>
  );
};

styles = {
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    flex: 1,
    height: 300,
    width: 300
  }
};

export default AlbumDetail;
