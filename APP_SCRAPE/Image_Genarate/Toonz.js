//step 1 
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

let data = new FormData();
data.append('style', '3D');
data.append('is_paid', '0');
data.append('device_id', 'F1D07DCE');
data.append('app_ver', '1.0');
data.append('image', fs.createReadStream('/var/mobile/Containers/Data/Application/9A73F044-DCD8-42F1-AA94-E5B170ED9F55/Library/Application Support/tmp/692ddc39-5acc-472f-ba95-cc5371b7faec'));

let config = {
  method: 'POST',
  url: 'https://toonz.toonai.app/api/generate',
  headers: {
    'User-Agent': 'Toonz/2 CFNetwork/3860.600.12 Darwin/25.5.0',
    'Accept-Language': 'en-US,en;q=0.9'
  },
  data: data
};

axios.request(config)
  .then(response => console.log(response.data))
  .catch(error => console.log('error', error));
{
  "status": true,
  "data": {
    "id": "019e7181-dafb-7a30-939c-47e962ec3784"
  }
}
//step 2
const axios = require('axios');
const FormData = require('form-data');

let data = new FormData();
data.append('id', '019e7181-dafb-7a30-939c-47e962ec3784');

let config = {
  method: 'POST',
  url: 'https://toonz.toonai.app/api/getresult',
  headers: {
    'User-Agent': 'Toonz/2 CFNetwork/3860.600.12 Darwin/25.5.0',
    'Accept-Language': 'en-US,en;q=0.9'
  },
  data: data
};

axios.request(config)
  .then(response => console.log(response.data))
  .catch(error => console.log('error', error));
{
  "status": true,
  "data": [
    "https://toonz.toonai.app/storage/results/1780020850_NaSe_fal.png"
  ]
}
