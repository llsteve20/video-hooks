import axios from 'axios';

const KEY = 'AIzaSyAmwlkvYx9OmW-5VnuyuRzqTeHMY5zRjWI';


export default axios.create ({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResult: 5,
        key: KEY
    }
});