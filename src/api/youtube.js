import axios from 'axios';

const KEY = 'AIzaSyCOqMs8oSffAGq4xaJZsFdDeWPujH-hcYws';

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params:{
     part: 'snippet',
     maxResults: 5,
     key:KEY
   } 
});