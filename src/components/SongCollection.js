import React, { Component } from 'react';
import Song from './Song';
  class SongCollection extends Component {
    constructor(props) {
      super(props);
    }

    render() {

      let songs = this.props.songs.map(song => {
        let className;
        if(song.id === this.props.selectedSongId) {
          className = 'selected'
        }
        let handleSongSelect = () => {
          this.props.handleSongSelect(song.id)
        };
        return(
          <Song
            key={song.id}
            className = {className}
            name={song.name}
            artist={song.artist}
            album={song.album}
            handleSongSelect={handleSongSelect}
          />

        )
      })
      return(
        <div className="small-6 columns">
          <h1>Songs</h1>
          <ul>
            {songs}
          </ul>
        </div>
      )


    }
  }


export default SongCollection;
