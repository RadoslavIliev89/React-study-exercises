import { combineReducers } from 'redux'

const songsReducer = () => {
    return [
        { title: 'Wait and Bleed', duration: '5:04' },
        { title: 'Fear in the dark', duration: '4:30' },
        { title: 'Seek and Destroy', duration: '6:59' },
        { title: 'Sleepwalking', duration: '3:25' }
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {

    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }
    return selectedSong
};


export default combineReducers({
    songs:songsReducer,
    selectedSong:selectedSongReducer
})