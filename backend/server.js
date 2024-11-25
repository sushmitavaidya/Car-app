const express = require('express');
const app = express();
require('dotenv').config();
const dbConfig = require('./config/dbConfig.js');
const port = process.env.PORT || 5001;
app.use(express.json());

const usersRoute = require('./routes/usersRoute.js');

app.use('/api/users', usersRoute);
app.listen(port, () => console.log(`Listening on port ${port}`));
