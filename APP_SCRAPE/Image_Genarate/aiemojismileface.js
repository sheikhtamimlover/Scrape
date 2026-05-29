const axios = require('axios');

let data = JSON.stringify("Cat");

let config = {
  method: 'POST',
  url: 'https://lumen-digital.com/apps/emojiMaker/prompt.php?prompt=Cat',
  headers: {
    'User-Agent': 'GenEmoji/4 CFNetwork/3860.600.12 Darwin/25.5.0',
    'Content-Type': 'application/json',
    'upload-draft-interop-version': '6',
    'upload-complete': '?1',
    'accept-language': 'en-US,en;q=0.9',
    'priority': 'u=3'
  },
  data: data
};

axios.request(config)
  .then(response => console.log(response.data))
  .catch(error => console.log('error', error));
