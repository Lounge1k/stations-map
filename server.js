/**
 * @overview  server
 */

const server = require('express')();
const request = require('request');

const options = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "Authorization": "Basic dGVzdF9jbGllbnRfaWQ6dGVzdF9jbGllbnRfc2VjcmV0="
  },
  url: 'https://api.test.thenewmotion.com/oauth2/access_token',
  form: {
    'grant_type': 'password',
    'username': 'programming-assignment@newmotion.com',
    'password': 'Zea2E5RA'
  }
};

const callback = (res) => {
  console.log('this is callback');
  console.log(res);
  return true;
};

server.get('/login',(req, res) => {
  request.post(options,() => callback(res));
  res.send('hello');
});



server.listen(3000,() => {
  console.log('Listening on 3000 port');
});