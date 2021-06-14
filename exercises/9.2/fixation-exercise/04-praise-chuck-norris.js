const fetch = require('node-fetch');

async function verifiedFetch(url) {
  if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
    return fetch(url)
      .then(response => response.json())
      .then(r => r.value);
  }
  else {
    throw new Error('endpoint não existe');
  }
};

async function sendJokeToFriend(name) {
  const message = await verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then(joke => `Oi ${name} ouve essa: ${joke}`)
    .catch(error => error);
  console.log(message);
}

sendJokeToFriend('Anna');