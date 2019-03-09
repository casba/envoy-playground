'use strict'
const os = require('os');

const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log(
    `${new Date()} ${req.method} ${req.path}`
  );
  next();
});

app.get('/', (req, res) => {
  res.send(`Hello from behind Envoy! hostname: ${os.hostname()}`);
});

app.use((req, res, next) => {
  res.status(404).end()
})

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});