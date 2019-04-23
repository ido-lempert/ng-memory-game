const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

const distPath = 'dist/memory-game';

express()
  .use(express.static(path.join(__dirname, distPath)))
  .get('/*', (req, res) => res.sendfile(path.join(__dirname, `${distPath}/index.html`)))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));
