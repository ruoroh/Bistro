const express = require('express');
const app = express();

const PORT = process.env.SERVER_PORT;



app.listen(PORT, () => {
  console.log(`Server running on PORT:${PORT}`)
});

module.exports = app