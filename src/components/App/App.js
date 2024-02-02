import React,{useState} from "react";
import "./App.css";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";



function App () {
  const [searchResults, setSearchResults] = useState([
    {
      name: "name1",
      artist: "artist1",
      album: "album1",
      id: 1
    },
    {
      name: "name2",
      artist: " artist2",
      album: "album2",
      id: 2
    },
    {
      name: "name3",
      artist: "artist3",
      album: "album3",
      id: 3
    } 
  ]);

  const[playlistName, setPlaylistName] = useState("My Playlist");
  const[playlistTracks, setPlaylistTracks] = useState([{
    name: "name4",
    artist: "artist4",
    album: "album4",
    id: 4
  },
  {
    name: "name5",
    artist: "artist5",
    album: "album5",
    id: 5
  },
  {
    name: "name6",
    artist: "artist6",
    album: "album6",
    id: 6
  }]);

  function addTrack(track) {
  const exsistingTracks = playlistTracks.find(savedTrack => savedTrack.id === track.id);
  const newTrack = playlistTracks.concat(track);
  if(exsistingTracks){
    console.log("Track already exists");
  } else {
    setPlaylistTracks(newTrack);
  };
  }

  function removeTrack(track) {
    const removingTracks = playlistTracks.filter(savedTrack => savedTrack.id !== track.id);
    setPlaylistTracks(removingTracks);
  }

  function updatePlaylistName(name){
    setPlaylistName(name);
  }

    return (
        <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">

          <div className="App-playlist">
            <SearchResults userSearchResults={searchResults} onAdd={addTrack}/>
            <Playlist playlistName={playlistName} 
            playlistTracks={playlistTracks} 
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
            />
          </div>
        </div>
      </div>
        );
}

export default App;