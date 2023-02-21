const express = require('express');
require('./database/index');
const User = require('./database/schemas/User');

const app = express();
const PORT = 3000;

app.listen(PORT, () => console.log(`Server connected to Port: ${PORT}!`));
