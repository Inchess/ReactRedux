import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 8b1d841ab9a94a644bbc83773b581d3ba4dd070cf2691756aa3e74f01a60ad0d'
    }
});
