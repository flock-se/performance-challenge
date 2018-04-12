const express = require('express')
const bodyParser = require('body-parser')

const port = 3000 || process.env.PORT

const messages = [
  {
    text: "Welcome at the performance login.",
    code: "blue"
  },
  {
    text: "Please login with username an password.",
    code: "blue"
  },
  {
    text: "Sorry, an error occurred.",
    code: "blue"
  },
  {
    text: "Our data center is on fire hold on.",
    code: "blue"
  }
]

const app = express();

app.use("/", express.static('public'))

app.use("/api", bodyParser.json())
app.use("/api", bodyParser.urlencoded())

app.get('/api/status', (req, res) => {
  const messageNumber = Math.floor((Math.random() * 4));
  return setTimeout(() => res.send(messages[messageNumber]), 2000);
});

app.post('/api/login', (req, res) => {
  if (req.body.username.toUpperCase() === 'HELLO' && req.body.password.toUpperCase() === 'WORLD') {
    return res.send({
      text: "Successful login.",
      code: "green"
    })
  }
  return res.send({
    text: "Error login please try again",
    code: "red"
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})