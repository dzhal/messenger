const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const clientPath = path.join(__dirname, './dist');

app.use(express.static(clientPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(clientPath, '/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}!`);
});
