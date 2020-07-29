const { default: Axios } = require("axios");
const API_KEY = 'AIzaSyB8Cudfk2t2qMpQUm5X_5ZHfkR-sSdWNeY';

export default Axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        maxResults:5,
        key: API_KEY
    }
});
