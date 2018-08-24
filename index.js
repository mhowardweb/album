import React from "react";
import { AppRegistry, View } from "react-native";
import Header from "./src/components/header";
import AlbumList from "./src/components/albumList";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header headerText="Albums" />
      <AlbumList />
    </View>
  );
};

AppRegistry.registerComponent("album", () => App);
