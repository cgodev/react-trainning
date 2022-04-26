import axios from 'axios';

const API_KEY = `AIzaSyBs2OxisG8NODbjj0lr5jFviAMZGEHLDOs`;

export default axios.create({
    baseURL: `https://www.googleapis.com/youtube/v3`,
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: API_KEY,
    }
});