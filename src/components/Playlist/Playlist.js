import React from "react";
import "./Playlist.css";
import Tracklist from "../TrackList/TrackList";

function Playlist(props) {
  function handleNameChange({ target }) {
  props.onNameChange(target.value);
  }
  return (
    <div className="Playlist">
      <input defaultValue={"New Playlist"} onChange={handleNameChange}/>
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
      <Tracklist userSearchResults={props.playlistTracks} onRemove={props.onRemove} isRemoval={false}/>
    </div>
  );
}

export default Playlist;