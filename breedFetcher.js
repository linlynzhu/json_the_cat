let breedName = process.argv[2];

const request = require('request');
request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response,body) => {
  console.log('request failed:', error);
  if (body === '[]') {
    console.log("the breed doesn't exist");
    return;
  }
  console.log(typeof body);
  const data = JSON.parse(body);
  console.log(data[0].description);
  console.log(typeof data);
});

