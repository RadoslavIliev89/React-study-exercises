import axios from 'axios'

const KEY = 'AIzaSyCdI3qltFAS2BjWjBxyJl-VNyDa1umIC4A';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 5,
      key: KEY
  }
});