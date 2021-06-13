const fetch = require('node-fetch');

function verifiedFetch(url) {
  return new Promise((resolve, reject) => {
    if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
      fetch(url)
        .then(response => response.json())
        .then(r => resolve(r.value));
    }
    else {
      reject(new Error('endpoint não existe'));
    }
  });
}

function sendJokeToFriend(name) {
  const message = verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then(joke => `Oi ${name} ouve essa: ${joke}`)
    .catch(error => error);
  console.log(message);
}

sendJokeToFriend('Anna');