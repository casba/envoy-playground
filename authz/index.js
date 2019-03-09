'use strict'
const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log(
    `${new Date()} ${req.method} ${req.path}`
  );
  next();
});

app.all('*', (req, res) => {
  const auth = req.headers.authorization;
  if (auth) {
    res.status(200).json({ status: 'OK '});
  }
  else {
    res.status(403).json({ status: 'PERMISSION_DENIED'});
  }
});

const port = process.env.PORT || 9091;
app.listen(port, () => console.log(`Listening on port ${port}`));