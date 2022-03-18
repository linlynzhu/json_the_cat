const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  let error1 = '';
  let desc = '';
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      error1 = error;
    }
    if (body === '[]') {
      error1 = "the breed doesn't exist";
    } else {
      const data = JSON.parse(body);
      desc = data[0].description;
    }
    callback(error1, desc);
  });
};

module.exports = fetchBreedDescription;