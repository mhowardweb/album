import React, { Component } from "react";
import axios from "axios";
import { ScrollView } from "react-native";
import AlbumDetail from "./albumDetail";

class AlbumList extends Component {
  state = {
    albums: []
  };

  async componentWillMount() {
    response = await axios.get(
      "https://rallycoding.herokuapp.com/api/music_albums"
    );
    this.setState({ albums: response.data });
  }

  renderAlbums() {
    return this.state.albums.map(album => (
      <AlbumDetail key={album.title} album={album} />
    ));
  }

  render() {
    return <ScrollView>{this.renderAlbums()}</ScrollView>;
  }
}

export default AlbumList;
