var playlist={artistName: 'songTitle'};
function updatePlaylist(playlist, artistName, songTitle){
    return Object.assign({artistName: 'songTitle'}, playlist)
}

function removeFromPlaylist(Object, artistName){
    delete playlist[artistName];
  
}