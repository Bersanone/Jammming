import React,{useState} from "react";
import styles from "./SearchResult.css";
import Tracklist from "../TrackList/TrackList";

function SearchResults(props) {
  return (
    <div className="SearchResults">
      {/* <!-- Add a Tracklist component --> */}
      <Tracklist userSearchResults={props.userSearchResults} 
      isRemoval={true} 
      onAdd={props.onAdd}/>
    </div>
  );
}

export default SearchResults;