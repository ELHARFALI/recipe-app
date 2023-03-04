import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

const options = {
    method: 'GET',
    url: 'https://yummly2.p.rapidapi.com/feeds/list',
    params: {limit: '24', start: '0'},
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
    }
  };
  
  

  export const data = axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });