import React, { Component} from 'react';
import Playlist from './Playlist';


class PlaylistCollection extends Component{
  constructor(props){
    super(props);
  }

  render(){
    let playlists = this.props.playlists.map(playlist => {

      let individualPlaylistSelect = () => {
        this.props.handlePlaylistSelect(playlist.id)
      }

      let className;
      if (this.props.selectedPlaylistId === playlist.id) {
        className = "selected"
      }

      return(
        <Playlist
          key={playlist.id}
          name={playlist.name}
          songs={playlist.songs}
          className={className}
          handlePlaylistSelect={individualPlaylistSelect}
        />
      )
    }
  )


    return(
      <div className="small-6 columns" >
        <h1>Playlist</h1>
        <ul>
          {playlists}
        </ul>

      </div>
    )
  }

}


export default PlaylistCollection;
